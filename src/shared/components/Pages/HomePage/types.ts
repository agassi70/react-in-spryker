import { WithStyles } from '@material-ui/core/styles/withStyles';
import {styles} from "src/shared/components/Pages/HomePage/styles";


export interface IHomePageProps extends WithStyles<typeof styles> {

}

export interface IHomePageState {
}

export interface ICategoriesTeasersData {
  title: string;
  text: string;
  img: string;
  path: string;
  linkTitle: string;
}
