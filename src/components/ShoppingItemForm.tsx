import { useRef } from "react";

interface ShoppingItemFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

function ShoppingItemForm({ onAddItem }: ShoppingItemFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const item = productInputRef.current?.value;
    const qty = quantityInputRef.current?.value;

    if (qty) {
      const qtyNum = parseInt(qty);

      if (item && qtyNum) {
        onAddItem(item, qtyNum);
        productInputRef.current.value = "";
        quantityInputRef.current.value = "1";
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input type="number" placeholder="1" min={0} ref={quantityInputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingItemForm;
