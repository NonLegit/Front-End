import {
  EmptyContentBox, DownArrow, UpArrow, SpecialBox, ArrowBox, EmptyText,
} from './styles';

/** the empty content when your having no posts nor comments
 * @return {React.Component} - EmptyContent
 * @param {string} emptyContent - the string that should appear in the empty page
 */

/**
 * the empty content when your having no posts nor comments
 *
 * @component EmptyContent
 * @property {string} emptyContent - the string that should appear in the empty page
 * @returns {React.Component} EmptyContent
 */
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
