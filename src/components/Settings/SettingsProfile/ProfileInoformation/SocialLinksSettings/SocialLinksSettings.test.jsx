import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
// import toJson from 'enzyme-to-json';
// import { mount } from 'enzyme';
// // import Adapter from 'enzyme-adapter-react-15';
// import EnzymeToJson from 'enzyme-to-json';
// import { mount, configure } from 'enzyme';
import SocialLinksSettings from './SocialLinksSettings';
import SettingsProvider from '../../../../../contexts/SettingsProvider';
// import SettingsProfile from '../../SettingsProfile';

// jest.mock('rc-util/lib/Portal');

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
// test snapshot
describe('Popover', () => {
  test('test snapshot', async () => {
    const tree = renderer.create(
      <Router>
        <SettingsProvider>
          <SocialLinksSettings />
        </SettingsProvider>
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// configure({ adapter: new Adapter() });

// describe('should render all the inner components', () => {
//   test('renders correctly', () => {
//     const subject = mount(

//       <SettingsProvider>
//         <SocialLinksSettings />
//       </SettingsProvider>,

//     );
//     expect(EnzymeToJson(subject)).toMatchSnapshot();
//   });
// });
// test('renders correctly', () => {
//   const component = toJson(renderer.create(
//     <Router>
//       <SettingsProfile>

//         <ProfileInoformation />

//       </SettingsProfile>

//     </Router>,
//   ));
//   expect(component).toMatchSnapshot();
//   // const subject = mount(<ProfileInoformation />);
//   // expect(EnzymeToJson(subject)).toMatchSnapshot();
// });
