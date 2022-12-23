import { useNavigate, useParams } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { CategoriesBox, Entity, HeaderText } from './styles';

/**
 * left side bar on top communities
 *
 * @component Categories
 * @property {array} allCategories - conatins all categories in the left sidebar
 * @returns {React.Component} Categories
 */
function Categories({ allCategories }) {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <CategoriesBox>
      <HeaderText>Categories</HeaderText>
      <Entity
        onClick={() => { navigate('moderating'); }}
        condition={(category === 'moderating').toString()}
      >
        Moderating
        <AdminPanelSettingsIcon sx={{ color: '#ff4500', marginLeft: '4px' }} fontSize="small" />
      </Entity>
      <Entity
        onClick={() => { navigate(''); }}
        condition={(category === undefined).toString()}
      >
        All Communities
      </Entity>
      {allCategories.map((entity, index) => (
        <Entity
          key={entity.id}
          onClick={() => { navigate(entity.text.toLowerCase()); }}
          condition={(entity.text.toLowerCase() === category).toString()}
          condition2={(index === allCategories.length - 1).toString()}
        >
          {entity.text}
        </Entity>
      ))}
    </CategoriesBox>
  );
}

export default Categories;
