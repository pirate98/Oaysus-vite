import { useState, useCallback } from "react";

import { Icon, Button, Card, Stack, Text, Popover } from "@shopify/polaris";
import { MobileHorizontalDotsMajor } from "@shopify/polaris-icons";

import styles from "./ProductCard.module.scss";
import { Switch, ActionList } from "../";

export function ProductCard({ imageSource }) {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  return (
    <Card
      footerActionAlignment="left"
      secondaryFooterActions={[{ content: "View Upsells" }]}
    >
      <div
        className={styles.imageDiv}
        style={{
          backgroundImage: imageSource
            ? imageSource
            : 'url("/image/empty-image.svg")',
          backgroundSize: imageSource ? "cover" : "unset",
        }}
      >
        <Switch className={styles.switch} />
      </div>
      <Card.Section>
        <Stack vertical spacing="tight">
          <Stack wrap={false} distribution="fill">
            <Text variant="headingMd" as="h3" fontWeight="regular">
              NEW FUNNEL 1 T-SHORT
            </Text>
            <Stack distribution="trailing">
              <Popover
                active={active}
                activator={
                  <span className={styles.spanSvgGray}>
                    <Button plain onClick={toggleActive}>
                      <Icon
                        source={MobileHorizontalDotsMajor}
                        color="subdued"
                      />
                    </Button>
                  </span>
                }
                autofocusTarget="first-node"
                onClose={toggleActive}
              >
                <ActionList
                  items={[
                    { content: "Edit" },
                    { content: "Duplicate" },
                    { content: "Delete" },
                  ]}
                />
              </Popover>
            </Stack>
          </Stack>
          <Stack wrap={false} distribution="fill">
            <Text variant="bodyMd" as="p">
              Views
            </Text>
            <Text variant="bodyMd" as="p" color="success" alignment="end">
              23K
            </Text>
          </Stack>
          <Stack wrap={false} distribution="fill">
            <Text variant="bodyMd" as="p">
              Conversion
            </Text>
            <Text variant="bodyMd" as="p" color="success" alignment="end">
              156 %
            </Text>
          </Stack>
          <Stack wrap={false} distribution="fill">
            <Text variant="bodyMd" as="p">
              Total $
            </Text>
            <Text variant="bodyMd" as="p" color="success" alignment="end">
              $ 156
            </Text>
          </Stack>
          <Stack wrap={false} distribution="fill">
            <Text variant="bodyMd" as="p">
              Visit
            </Text>
            <Text variant="bodyMd" as="p" color="success" alignment="end">
              $ 2.569
            </Text>
          </Stack>
        </Stack>
      </Card.Section>
    </Card>
  );
}
