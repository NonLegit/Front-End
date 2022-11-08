import {
  EmptyContentBox, DownArrow, UpArrow, SpecialBox, ArrowBox, EmptyText,
} from './styles';

function EmptyContent(props) {
  const { emptyContent } = props;
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
          {emptyContent}
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
