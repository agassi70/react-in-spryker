import {WithStyles} from '@material-ui/core/styles/withStyles';
import {styles} from "./styles";
import {ICategoriesTeasersData} from "src/shared/components/Pages/HomePage/types";


export interface ICategoriesTeasersProps extends WithStyles<typeof styles> {
  teasers: Array<ICategoriesTeasersData>;
}
