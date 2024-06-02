import { useRouter } from "next/router";

const PropertyListDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>PROPERTY LIST DETAIL {productId}</div>;
};

export default PropertyListDetail;
