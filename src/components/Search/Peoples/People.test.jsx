import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import People from './People';

// test snapshot
test('test snapshot', async () => {
  const props = {
    people: [
      {
        _id: 'ad',
        userName: 'ahmed',
        profilePicture: 'https://scontent.fcai19-6.fna.fbcdn.net/v/t1.18169-9/14731344_1268156939902850_4843578088361110846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEky4_3cTAH8AsHcH3UuXIKcLp-k-70xXVwun6T7vTFdcArTit-okcWlHaag26qfJeWLi2DDiYbw59pVU7sfWCM&_nc_ohc=A5SpL8aNUVEAX-YO51A&_nc_oc=AQniPbizNXpZ3SFnkYVS1CpwqCbtRPI2D8DeAHUhOG0t0JSuAtT4Bvl1Xbu4WrCWCn8&_nc_ht=scontent.fcai19-6.fna&oh=00_AfDhRAFvWuZtkXlwquZXICIDBSAhT2eF7HurP0EfQHnCEg&oe=63C6E9D2',
        displayName: 'asd',
        postKarma: 123,
        commentKarma: 123,
        description: 'asd',
        isFollowed: true,
      },
    ],
  };
  const tree = renderer.create(
    <Router><People {...props} /></Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
