import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=> ({
    article: {
        padding: '10px'
    },
    links: {
        allignitem: 'center',
        fontWeight: 'bold',
        textDecoration: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        '&:hover': {
            cursor: 'pointer',
        }
    },
    image: {
        borderRadius: '20px',
        height: '300px',
        marginBottom: '10px',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    },
    title: {
        textOverflow: 'ellipsis',
        width: '500px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center'
    }
}))