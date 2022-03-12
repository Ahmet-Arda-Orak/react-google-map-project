import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  bold: {
    fontWeight:"bolder"
  },
  videores :{
    overflow: "hidden",
    width:"100%",
    paddingBottom: "56.25%" ,
    position: "relative",
    height: 0
  }
}));