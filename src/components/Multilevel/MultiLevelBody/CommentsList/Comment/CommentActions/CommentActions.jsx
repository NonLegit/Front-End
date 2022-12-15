import { useCookies } from 'react-cookie';

// MUI Compoents
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

// Components
import Reactions from '../../../../../Post/Reactions/Reactions';
import DropDownList from '../../../../../DropDownList/DropDownList';

// Context
import { usePostContext } from '../../../../../../contexts/PostContext';

// styles
import { CommentActionsContainer } from './styles';
import { ElementBox, FooterText } from '../../../../../MainProfile/OtherProfile/OtherProfileMainContent/OtherProfileContent/OtherProfilePosts/OtherProfilePostFooter/styles';

function CommentActions(props) {
  // cookies
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['redditUser']);

  // Context
  const { post } = usePostContext();

  const { comment } = props;

  const dropDownListOptions = [{ value: 'Save', icon: 'Save' }];
  const dropDownListOptionsAuthor = [{ value: 'Edit', icon: 'Edit' }, { value: 'Save', icon: 'Save' }, { value: 'Delete', icon: 'Delete' }];

  // const dropDownListOptionsAuthor = [{ value: 'Save', icon: 'Save' }, { value: 'Edit', icon: 'Edit' }, { value: 'Delete', icon: 'Delete' }];

  const replyOnComment = () => {
    // call Reply endPoint
    console.log('Reply on Comment with Text', comment?.text);
  };

  const shareComment = () => {
    // call Share endPoint
    console.log('Share Comment with Text', comment?.text);
  };
  const handleSelect = (option) => {
    // Call Back API
    console.log('Option Selected', option);
    if (option === 'Edit') {
      // call Edit endPoint
      console.log('Edit Comment with Text', comment?.text);
    } else if (option === 'Save') {
      // call Save endPoint
      console.log('Save Comment with Text', comment?.text);
    } else if (option === 'Delete') {
      // call Delete endPoint
      console.log('Delete Comment with Text', comment?.text);
    }
  };

  return (
    <CommentActionsContainer>
      {post && (
        <Reactions
          flexDirection="row"
          viewPost
          votes={post?.votes}
          postVoteStatus={post?.postVoteStatus}
          postId={post?._id}
        />
      )}
      <ElementBox onClick={replyOnComment}>
        <ChatBubbleOutlineOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>
          Reply
        </FooterText>
      </ElementBox>

      <ElementBox onClick={shareComment}>
        <FooterText variant="caption" responsiveshare={false.toString()}>
          Share
        </FooterText>
      </ElementBox>

      <DropDownList handleSelectionFun={handleSelect} options={cookies.redditUser?.id === comment?.author?._id ? dropDownListOptionsAuthor : dropDownListOptions} />
    </CommentActionsContainer>
  );
}

export default CommentActions;
