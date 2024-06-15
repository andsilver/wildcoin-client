import Button from "./Button";

interface Props {
  size?: "md" | "lg";
  onClick?: () => void;
}

export default function BuyNowButton({ size = "md", onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      className="!bg-primary hover:!bg-light-blue !px-10 py-2"
      variant="contained"
      rounded
      size={size}
    >
      Buy Now
    </Button>
  );
}
