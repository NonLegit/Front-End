import {
  EmptyContentBox, DownArrow, UpArrow, SpecialBox, ArrowBox, EmptyText,
} from './styles';

function EmptyContent(props) {
  const { username } = props;
  return (
    <>
      <EmptyContentBox>
        <UpArrow color="disabled" />
        <DownArrow color="disabled" />
      </EmptyContentBox>
      <EmptyContentBox>
        <UpArrow color="disabled" />
        <DownArrow color="disabled" />
      </EmptyContentBox>
      <EmptyContentBox>
        <UpArrow color="disabled" />
        <DownArrow color="disabled" />
      </EmptyContentBox>
      <SpecialBox>
        <ArrowBox>
          <UpArrow color="disabled" />
          <DownArrow color="disabled" />
        </ArrowBox>
        <EmptyText>
          hmm... u/
          {username}
          {' '}
          hasn&apos;t posted recently
        </EmptyText>
      </SpecialBox>
      <EmptyContentBox>
        <UpArrow color="disabled" />
        <DownArrow color="disabled" />
      </EmptyContentBox>
      <EmptyContentBox>
        <UpArrow color="disabled" />
        <DownArrow color="disabled" />
      </EmptyContentBox>
      <EmptyContentBox>
        <UpArrow color="disabled" />
        <DownArrow color="disabled" />
      </EmptyContentBox>

    </>
  );
}

export default EmptyContent;
