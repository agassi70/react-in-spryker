import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import {styles} from './styles';
import {IHomePageProps, IHomePageState} from "./types";
import {connect} from './connect';
import {categoriesTeasersData} from "./constants/categoriesTeasersData";
import {CategoriesTeasers} from "./CategoriesTeasers";
import {AppMain} from '../../Common/AppMain';
import {Banner} from "src/shared/components/Pages/HomePage/Banner/index";
import {
  HomePageBannerBtnText,
  HomePageBannerIntro,
  HomePageBannerTitleFirst,
  HomePageBannerTitleSecond
} from "src/shared/constants/content/homePage";
import {pathCategoryComputers} from "src/shared/routes/categoriesRoutes";


@connect
export class HomePageBase extends React.Component<IHomePageProps, IHomePageState> {

  public state: IHomePageState = {};

  public render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
        <Banner
          titleFirst={HomePageBannerTitleFirst}
          titleSecond={HomePageBannerTitleSecond}
          intro={HomePageBannerIntro}
          linkPath={pathCategoryComputers}
          linkTitle={HomePageBannerBtnText}
        />
        <AppMain>
          <CategoriesTeasers teasers={categoriesTeasersData} />
        </AppMain>
      </React.Fragment>
    );
  }
}

export const HomePage = withStyles(styles)(HomePageBase);
export default HomePage;
