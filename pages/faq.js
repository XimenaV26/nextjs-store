import Link from "next/link";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import en from "@/en";
import es from "@/es";

export default function FAQ() {
  const { asPath, locale, locales } = useRouter();
  const t = locale === "en" ? en : es;

  return (
    <Layout title="FAQ">
      <h1>{t.fqa.fqa}</h1>
    </Layout>
  );
}
