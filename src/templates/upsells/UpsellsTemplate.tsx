import { Page, Layout } from "@shopify/polaris";
import { Header } from "@/organisms/upsells/header/Header";

export function UpsellsTemplate({ children }: { children: any }) {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Header />
        </Layout.Section>
        <Layout.Section>{children}</Layout.Section>
      </Layout>
    </Page>
  );
}
