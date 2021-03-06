import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Minim ipsum in ipsum tempor proident eiusmod adipisicing eiusmod
          deserunt elit eu anim fugiat culpa. Laborum mollit magna aliquip
          dolore in occaecat incididunt mollit eu. Sunt consectetur sit deserunt
          ipsum sint aute. Voluptate irure quis ea veniam do mollit et. Laborum
          in aliqua ea voluptate quis sint esse anim. Lorem cillum laborum do
          dolor deserunt ea culpa dolor adipisicing ad ex sint nisi.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See All Ninja</a>
        </Link>
      </div>
    </>
  );
}
