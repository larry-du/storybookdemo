import {
  Quasar,
  QLayout,
  QHeader,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QAvatar,
  QTabs,
  QRouteTab,
  QDrawer,
  QPageContainer,
  QFooter,
} from "quasar";

import "@quasar/extras/material-icons/material-icons.css";

import "quasar/src/css/index.sass";

export default {
  install(app) {
    app.use(Quasar, {
      components: [
        QLayout,
        QHeader,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QAvatar,
        QTabs,
        QRouteTab,
        QDrawer,
        QPageContainer,
        QFooter,
      ],
      plugins: [],
    });
  },
};
