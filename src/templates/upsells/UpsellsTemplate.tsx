import { Page, Layout } from "@shopify/polaris";

interface Props {
  children: any;
  header: React.ReactNode;
}

export function UpsellsTemplate({ children, header }: Props) {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>{header}</Layout.Section>
        <Layout.Section>{children}</Layout.Section>
      </Layout>
    </Page>
  );
}
