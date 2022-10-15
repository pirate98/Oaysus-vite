import { builderSettings } from "../data/builderSettings";

const keyList = builderSettings.fieldNames;

var values = Object.keys(keyList) as unknown as keyof typeof keyList;

export type BuilderModule = typeof values;
