import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Comments from './Comments';

// test snapshot
test('test snapshot', async () => {
  const props = {
    Comment:
      {
        _id: 'asd',
        author: {
          _id: 'asd212',
          userName: 'ahmed',
          profilePicture: 'https://scontent.fcai19-6.fna.fbcdn.net/v/t1.18169-9/1610059_681891708529379_2132042836_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFisYcHx5f55wofAI89qsv4zwd8DyzyeI7PB3wPLPJ4jmThq4Z2nXImJdnzBzY682Ug8GJmq6pI9RMvTwe9n4Gn&_nc_ohc=njty5Km-D6IAX9S2nST&_nc_ht=scontent.fcai19-6.fna&oh=00_AfCuo4cKDBZx7mLXxK-A1PtFj7RKiSri443Fa8QU-Pb5yw&oe=63C8EB3B',
          displayName: 'milk',
        },
        post: {
          _id: 'asd212',
          author: {
            _id: 'asd212',
            userName: 'ahmed',
            profilePicture: 'https://scontent.fcai19-6.fna.fbcdn.net/v/t1.18169-9/14731344_1268156939902850_4843578088361110846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEky4_3cTAH8AsHcH3UuXIKcLp-k-70xXVwun6T7vTFdcArTit-okcWlHaag26qfJeWLi2DDiYbw59pVU7sfWCM&_nc_ohc=A5SpL8aNUVEAX-YO51A&_nc_oc=AQniPbizNXpZ3SFnkYVS1CpwqCbtRPI2D8DeAHUhOG0t0JSuAtT4Bvl1Xbu4WrCWCn8&_nc_ht=scontent.fcai19-6.fna&oh=00_AfDhRAFvWuZtkXlwquZXICIDBSAhT2eF7HurP0EfQHnCEg&oe=63C6E9D2',
            displayName: 'hamada',
          },
          owner: {
            icon: 'https://scontent.fcai19-6.fna.fbcdn.net/v/t1.18169-9/14731344_1268156939902850_4843578088361110846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEky4_3cTAH8AsHcH3UuXIKcLp-k-70xXVwun6T7vTFdcArTit-okcWlHaag26qfJeWLi2DDiYbw59pVU7sfWCM&_nc_ohc=A5SpL8aNUVEAX-YO51A&_nc_oc=AQniPbizNXpZ3SFnkYVS1CpwqCbtRPI2D8DeAHUhOG0t0JSuAtT4Bvl1Xbu4WrCWCn8&_nc_ht=scontent.fcai19-6.fna&oh=00_AfDhRAFvWuZtkXlwquZXICIDBSAhT2eF7HurP0EfQHnCEg&oe=63C6E9D2',
            _id: '12asda2',
            fixedName: 'Nonlegit',
            name: 'asdwd',
            membersCount: 123,
            description: 'this is my first subreddit',
          },
          title: 'first post',
          kind: 'image',
          text: 'asdasda',
          url: 'https://scontent.fcai19-6.fna.fbcdn.net/v/t1.18169-9/14731344_1268156939902850_4843578088361110846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEky4_3cTAH8AsHcH3UuXIKcLp-k-70xXVwun6T7vTFdcArTit-okcWlHaag26qfJeWLi2DDiYbw59pVU7sfWCM&_nc_ohc=A5SpL8aNUVEAX-YO51A&_nc_oc=AQniPbizNXpZ3SFnkYVS1CpwqCbtRPI2D8DeAHUhOG0t0JSuAtT4Bvl1Xbu4WrCWCn8&_nc_ht=scontent.fcai19-6.fna&oh=00_AfDhRAFvWuZtkXlwquZXICIDBSAhT2eF7HurP0EfQHnCEg&oe=63C6E9D2',
          images: [
            'https://scontent.fcai19-6.fna.fbcdn.net/v/t1.18169-9/14731344_1268156939902850_4843578088361110846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEky4_3cTAH8AsHcH3UuXIKcLp-k-70xXVwun6T7vTFdcArTit-okcWlHaag26qfJeWLi2DDiYbw59pVU7sfWCM&_nc_ohc=A5SpL8aNUVEAX-YO51A&_nc_oc=AQniPbizNXpZ3SFnkYVS1CpwqCbtRPI2D8DeAHUhOG0t0JSuAtT4Bvl1Xbu4WrCWCn8&_nc_ht=scontent.fcai19-6.fna&oh=00_AfDhRAFvWuZtkXlwquZXICIDBSAhT2eF7HurP0EfQHnCEg&oe=63C6E9D2',
            'https://scontent.fcai19-6.fna.fbcdn.net/v/t1.18169-9/14731344_1268156939902850_4843578088361110846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEky4_3cTAH8AsHcH3UuXIKcLp-k-70xXVwun6T7vTFdcArTit-okcWlHaag26qfJeWLi2DDiYbw59pVU7sfWCM&_nc_ohc=A5SpL8aNUVEAX-YO51A&_nc_oc=AQniPbizNXpZ3SFnkYVS1CpwqCbtRPI2D8DeAHUhOG0t0JSuAtT4Bvl1Xbu4WrCWCn8&_nc_ht=scontent.fcai19-6.fna&oh=00_AfDhRAFvWuZtkXlwquZXICIDBSAhT2eF7HurP0EfQHnCEg&oe=63C6E9D2',
            'https://scontent.fcai19-6.fna.fbcdn.net/v/t1.18169-9/14731344_1268156939902850_4843578088361110846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEky4_3cTAH8AsHcH3UuXIKcLp-k-70xXVwun6T7vTFdcArTit-okcWlHaag26qfJeWLi2DDiYbw59pVU7sfWCM&_nc_ohc=A5SpL8aNUVEAX-YO51A&_nc_oc=AQniPbizNXpZ3SFnkYVS1CpwqCbtRPI2D8DeAHUhOG0t0JSuAtT4Bvl1Xbu4WrCWCn8&_nc_ht=scontent.fcai19-6.fna&oh=00_AfDhRAFvWuZtkXlwquZXICIDBSAhT2eF7HurP0EfQHnCEg&oe=63C6E9D2',
          ],
          video: 'hamada with milk',
          votes: 1200,
          commentCount: 1300,

          createdAt: '2022-11-12T12:29:28Z',
          flairId: {
            _id: 'asd',
            text: 'asd',
            backgroundColor: 'blue',
            textColor: 'red',
          },
        },
        text: "aspidasjd;ioajf;sadfs;f adas daspdioasdklsa iodaskl;d jasdj sad iajfhdafhjsd fhad isd ijsa ja;sfh;jal;f h;jasdh uoas'jdash;jhas;fiasj das'jd asj dhuaos;d j;as'dk as jfa;sifj'las sa;dkl jnasjd as;f a;kf as d;asnfajlsf nla'f'klash fas'f ashf a'hf aio'f ha'fh 'ahfl ahsf hdajfjsdbgdalfja ;fdusghf;afh alndsg' hak fkDAJF ldanfl'kaf hal'kfh a'l hf'alsias  ihasdh asl'kfjash ahjfhasjf haslf hlas hfa'hslf haf'gaudlfNj'alsh 'g aspidasjd;ioajf;sadfs;f adas daspdioasdklsa iodaskl;d jasdj sad iajfhdafhjsd fhad isd ijsa ja;sfh;jal;f h;jasdh uoas'jdash;jhas;fiasj das'jd asj dhuaos;d j;as'dk as jfa;sifj'las sa;dkl jnasjd as;f a;kf as d;asnfajlsf nla'f'klash fas'f ashf a'hf aio'f ha'fh 'ahfl ahsf hdajfjsdbgdalfja ;fdusghf;afh alndsg' hak fkDAJF ldanfl'kaf hal'kfh a'l hf'alsias  ihasdh asl'kfjash ahjfhasjf haslf hlas hfa'hslf haf'gaudlfNj'alsh",
        createdAt: '2022-11-12T12:29:28Z',
        votes: 1200,
        repliesCount: 1222,
      },
  };
  const tree = renderer.create(

    <Router>
      <Comments {...props} />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
