import { useShop } from "../context/ShopContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist, wishlist } = useShop();
  const isWished = wishlist.some((w) => w.id === product.id);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-3">
        <div className="font-semibold">{product.title}</div>
        <div className="text-sm text-gray-500">{product.artistName || product.category}</div>
        <div className="mt-1 font-bold">₹{Number(product.price).toLocaleString("en-IN")}</div>

        <div className="mt-3 flex gap-8">
          <button
            className="btn"
            onClick={() => addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              artistName: product.artistName
            })}
          >
            🛒 Add to Cart
          </button>

          <button
            className="btn ghost"
            onClick={() => addToWishlist({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              artistName: product.artistName
            })}
            disabled={isWished}
            title={isWished ? "Already in wishlist" : "Add to wishlist"}
          >
            {isWished ? "♡ Wished" : "♡ Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
