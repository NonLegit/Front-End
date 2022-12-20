import {
  Avatar, Box, Typography,
} from '@mui/material';
import {
  PostContainer, PostInfo, PostInfoLink, PostTitle,
  PostRich,
  CommentContainer,
  CommentReach,
  GoToThread,
} from './style';

/**
 * Search by Comments entity
 * @component
 * @return {React.Component} - Search by community entity
 */
function Comments() {
  return (
    <PostContainer sx={{ '&:hover': { border: 1 } }}>
      <Box width="100%">
        <Box sx={{ padding: '16px 16px 4px' }}>
          <PostInfo>
            <Avatar
              src="https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png"
              sx={{
                width: 20,
                height: 20,
              }}
              alt="Profile Image"
            />
            <PostInfoLink to="/r/toptalent" color="#000" fontWeight="bolder">
              r/toptalent
            </PostInfoLink>
            <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
              <span>
                •
              </span>
              <div>Posted By</div>
              <PostInfoLink to="/user/righteous_boldness07" color="inherit" fontWeight="normal">
                u/righteous_boldness07 2 years ago
              </PostInfoLink>
            </Box>
          </PostInfo>
        </Box>

        <PostTitle to="/">
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontSize: 12, marginBottom: '12px', fontWeight: '400',
            }}
          >
            Update: My (32F) husband (36M) became a robot and I don’t know how to help him.

          </Typography>
          <CommentContainer>
            <Avatar
              src="https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png"
              sx={{
                width: 20,
                height: 20,
                margin: 1,
              }}
              alt="Profile Image"
            />
            <Box>
              <PostInfo py={1}>

                <PostInfoLink to="/user/AhmehHosny" color="#000" fontWeight="bolder">
                  Ahmed Hosny
                </PostInfoLink>
                <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
                  <Typography component="span" mx="4px" sx={{ fontSize: '6px', display: 'flex', alignItems: 'center' }}>
                    •
                  </Typography>
                  <PostInfoLink to="/" color="inherit" fontWeight="normal">
                    2 years ago
                  </PostInfoLink>
                </Box>
              </PostInfo>
              {/* question */}
              <Typography variant="h6" component="h3" sx={{ fontSize: 14, marginBottom: '12px', fontWeight: '400' }}>
                I &apos;m German, nobody cared to translate so here we go:
              </Typography>
              {/* Answer */}
              <Typography variant="h6" component="h3" sx={{ fontSize: 14, marginBottom: '12px', fontWeight: '400' }}>
                AA - AAA - OOOO - OOOO - AA - AA - AAAAAA - AAA - AAAOOOO - AAOO - AAOO - AAOO - AAAA - AAAA - AAAAOOOOO - AAAAAAO - AAAOO - AAO - AAAAAAAAUUAAA - AAAAAHHA - AUUUA - AAAA - AAA - AAU
              </Typography>
              <Typography variant="h6" component="h3" sx={{ fontSize: 14, marginBottom: '12px', fontWeight: '400' }}>
                Hope I could help you understand the concerns of that young person.
              </Typography>
              <CommentReach>
                <Typography variant="span" sx={{ marginRight: 3, padding: 0 }}>10k upvotes </Typography>
                <Typography variant="span" sx={{ marginRight: 3, padding: 0 }}>12k awards </Typography>
              </CommentReach>
            </Box>
          </CommentContainer>
        </PostTitle>
        <GoToThread>
          Go to thread
        </GoToThread>
        <PostRich mt={5}>
          <Typography variant="span" sx={{ marginRight: 3 }}>120k upvotes </Typography>
          <Typography variant="span" sx={{ marginRight: 3 }}>120k comments </Typography>
          <Typography variant="span" sx={{ marginRight: 3 }}>120k awards </Typography>
        </PostRich>
      </Box>
    </PostContainer>
  );
}

export default Comments;
