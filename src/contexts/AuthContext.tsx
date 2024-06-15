"use client";

import SignMessageModal from "@/components/SignMessageModal";
import { api } from "@/hooks/useApi";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAccount, useSignMessage, useChainId, useDisconnect } from "wagmi";
import { SiweMessage } from "siwe";
import { Alert } from "@/utils/alert";

export const AuthContext = createContext({
  loading: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState({
    user: null,
    loading: true,
  });
  const { address } = useAccount();
  const chainId = useChainId();
  const { signMessageAsync } = useSignMessage();
  const { disconnectAsync } = useDisconnect();
  const [showSignMessage, setShowSignMessage] = useState(false);

  const checkUser = async () => {
    if (!localStorage.getItem("token")) {
      setShowSignMessage(true);
      return;
    }

    try {
      const { data: user } = await api.get("/user/me");

      if (user.pubKey?.toLowerCase() === address?.toLowerCase()) {
        setAuth({
          loading: false,
          user,
        });
      } else {
        setShowSignMessage(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const login = async () => {
    setShowSignMessage(false);

    if (!address || !chainId) {
      return;
    }
    setAuth({
      user: null,
      loading: true,
    });

    try {
      const {
        data: { nonce },
      } = await api.post("/auth/nonce", {
        pubKey: address,
      });

      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in to WiLD Coin",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce,
      });

      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      const {
        data: { accessToken, user },
      } = await api.post("/auth/verify", {
        nonce,
        message,
        signature,
      });
      localStorage.setItem("token", accessToken);
      setAuth({ user, loading: false });
    } catch (err: any) {
      Alert.error(
        err?.response?.message ?? "There was an error. Please login again."
      );
      console.error(err);
      setAuth({
        user: null,
        loading: false,
      });
    }
    setShowSignMessage(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    disconnectAsync();
    setAuth({
      user: null,
      loading: false,
    });
  };

  useEffect(() => {
    if (!address) {
      setAuth({
        user: null,
        loading: false,
      });
    } else {
      checkUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        logout,
        login,
      }}
    >
      {children}
      <SignMessageModal
        open={showSignMessage}
        onClose={() => setShowSignMessage(false)}
        onSign={() => login()}
      ></SignMessageModal>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
