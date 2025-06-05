import { defineClientConfig } from "@vuepress/client";
import VersionList from "../components/versionlist.vue";

export default defineClientConfig({
  //   rootComponents: [VueTypedJs],
  enhance: ({ app, router, siteData }) => {
    app.component("versionlist", VersionList);
  },
});
