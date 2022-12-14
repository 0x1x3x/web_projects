import styles from "./Cart.module.scss";

function Cart({ onCloseCart, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className="d-flex justify-between mb-30">
          <h2>Orders</h2>
          <img
            onClick={onCloseCart}
            className={styles.removeBtn}
            width={15}
            height={15}
            src="/img/right-arrow.png"
            alt="CLOSE"
          />
        </div>
        <div className={styles.items}>
          {items.map((obj) => (
            <div className={styles.cartItem}>
              <div
                style={{
                  backgroundImage: `url(${obj.imageUrl})`,
                }}
                className={styles.cartItemImg}
              ></div>
              <div>
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} €</b>
              </div>
              <img
                className={styles.removeBtn}
                width={15}
                height={15}
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>
        <div className={styles.cartTotalBlock}>
          <ul>
            <li className="d-flex">
              <span>Subtotal:</span>
              <div></div>
              <b>120 €</b>
            </li>
            <li className="d-flex">
              <span>Total:</span>
              <div></div>
              <b>120 €</b>
            </li>
          </ul>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
