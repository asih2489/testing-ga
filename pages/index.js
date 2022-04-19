import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import TagManager from "react-gtm-module";

export default function Home() {
  const productImpresion = () => {
    TagManager.dataLayer({ ecommerce: null });
    TagManager.dataLayer({
      dataLayer: {
        event: "productImpression",
        ecommerce: {
          currencyCode: "EUR", // Local currency is optional.
          impressions: [
            {
              name: "Triblend Android T-Shirt", // Name or ID is required.
              id: "12345",
              price: "15.25",
              brand: "Google",
              category: "Apparel",
              variant: "Gray",
              list: "popular > promotion",
              position: 1,
            },
            {
              name: "Donut Friday Scented T-Shirt",
              id: "67890",
              price: "33.75",
              brand: "Google",
              category: "Apparel",
              variant: "Black",
              list: "popular > promotion",
              position: 2,
            },
          ],
        },
      },
    });
  };

  const productClick = () => {
    TagManager.dataLayer({ ecommerce: null });
    TagManager.dataLayer({
      dataLayer: {
        event: "productClick",
        ecommerce: {
          click: {
            actionField: { list: "popular > promotion" }, // Optional list property.
            products: [
              {
                name: "Donut Friday Scented T-Shirt",
                id: "67890",
                price: "33.75",
                brand: "Google",
                category: "Apparel",
                variant: "Black",
                list: "popular > promotion",
                position: 2,
              },
            ],
          },
        },
      },
    });
  };

  const addToCart = () => {
    TagManager.dataLayer({ ecommerce: null });
    TagManager.dataLayer({
      dataLayer: {
        event: "addToCart",
        ecommerce: {
          currencyCode: "EUR",
          add: {
            // 'add' actionFieldObject measures.
            products: [
              {
                //  adding a product to a shopping cart.
                name: "Donut Friday Scented T-Shirt",
                id: "67890",
                price: "33.75",
                brand: "Google",
                category: "Apparel",
                variant: "Gray",
                quantity: 1,
              },
            ],
          },
        },
      },
    });
  };

  const removeFromCart = () => {
    TagManager.dataLayer({ ecommerce: null });
    TagManager.dataLayer({
      dataLayer: {
        event: "removeFromCart",
        ecommerce: {
          currencyCode: "EUR",
          remove: {
            // 'add' actionFieldObject measures.
            products: [
              {
                //  adding a product to a shopping cart.
                name: "Donut Friday Scented T-Shirt",
                id: "67890",
                price: "33.75",
                brand: "Google",
                category: "Apparel",
                variant: "Gray",
                quantity: 1,
              },
            ],
          },
        },
      },
    });
  };
  const checkout = () => {
    console.log(1);
    TagManager.dataLayer({ ecommerce: null });
    TagManager.dataLayer({
      dataLayer: {
        pageType: "checkout",
        pageName: "checkout",
        event: "checkout",
        eventAction: "checkout",
        ecommerce: {
          checkout: {
            actionField: { step: 1, option: "Visa" },
            products: [
              {
                name: "Donut Friday Scented T-Shirt",
                id: "67890",
                price: "33.75",
                brand: "Google",
                category: "Apparel",
                variant: "Gray",
                quantity: 1,
              },
            ],
          },
        },
      },
    });
  };
  const purchase = () => {
    TagManager.dataLayer({ ecommerce: null });
    TagManager.dataLayer({
      dataLayer: {
        event: "purchase",
        eventAction: "purchase",
        ecommerce: {
          purchase: {
            actionField: {
              id: "T12345", // Transaction ID. Required for purchases and refunds.
              affiliation: "Online Store",
              revenue: "33.75", // Total transaction value (incl. tax and shipping)
              tax: "4.90",
              shipping: "5.99",
              coupon: "SUMMER_SALE",
            },
            products: [
              {
                // List of productFieldObjects.
                name: "Donut Friday Scented T-Shirt", // Name or ID is required.
                id: "67890",
                price: "33.75",
                brand: "Google",
                category: "Apparel",
                variant: "Gray",
                quantity: 1,
                coupon: "", // Optional fields may be omitted or set to empty string.
              },
            ],
          },
        },
      },
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="/pages2">
          <a>Page2</a>
        </Link>
        <Link href="/pages3">
          <a>Page3</a>
        </Link>
        <button
          onClick={() => {
            productImpresion();
          }}
        >
          Trigger Impresion
        </button>
        <button
          onClick={() => {
            productClick();
          }}
        >
          Trigger product click
        </button>
        <button
          onClick={() => {
            addToCart();
          }}
        >
          Trigger add to cart click
        </button>
        <button
          onClick={() => {
            removeFromCart();
          }}
        >
          Trigger remove product from click
        </button>
        <button
          onClick={() => {
            checkout();
          }}
        >
          Trigger checkout click
        </button>
        <button
          onClick={() => {
            purchase();
          }}
        >
          Trigger purchase
        </button>
      </main>
    </div>
  );
}
