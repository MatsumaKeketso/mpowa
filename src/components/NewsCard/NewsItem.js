import React from 'react'
import {
  main,
  top,
  dateWrapper,
  dateStyle,
  more,
  articleWrapper,
  content,
  title,
  titleStyle,
  descStyle,
  author,
  authorStyle,
  image,
  imageCover
} from './style.module.scss'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion';
var moment = require('moment');
function NewsItem(data) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const NODE = data.data.node
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  console.log(data)
  return (
    <motion.div animate={{ opacity: 1 }} initial={{opacity: 0}} transition={{duration: 2, delay: 0.5 * data.index}} className={main}>
      <div className={top}>
        <div className={dateWrapper}>
          <p className={dateStyle}> {NODE.frontmatter.category && (<Chip label={NODE.frontmatter.category} variant="outline" color='primary' />)} {moment(NODE.frontmatter.date).format('MMMM D, YYYY')}</p>
        </div>
        <div className={more}>


          <IconButton color='primary' aria-describedby={id} variant="contained" onClick={handleClick}>
            <MoreVertRoundedIcon />
          </IconButton>
          <Popover
            color='dark'
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center" >
              <Typography sx={{ ml: 2 }} variant='body1'>Share</Typography>
              <IconButton>
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <WhatsAppIcon />
              </IconButton>

            </Stack>
          </Popover>
          {/* */}
        </div>
      </div>
      <div className={articleWrapper}>
        <div className={content}>
          <div className={title}>

            <Link className={titleStyle} to={`${NODE.fields.slug}`} >
              {NODE.frontmatter.title.replaceAll('-', ' ')}
            </Link>
            <p className={descStyle}>{NODE.excerpt}</p>
          </div>
          <div className={author}>
            <p className={authorStyle}>by {NODE.frontmatter.author}</p>
          </div>
        </div>
        <div className={image}>
          <GatsbyImage className={imageCover} image={data.image} alt={NODE.frontmatter.title} />
          {/* <img className={imageCover} src={ImageBG} alt='Article Image' /> */}
        </div>
      </div>
    </motion.div>
  )
}

export default NewsItem