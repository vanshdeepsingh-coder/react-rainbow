import React from 'react';
import PropTypes from 'prop-types';
import useMarkdownToReact from './hooks/useMarkdownToReact';
import StyledContainer from './styled';
import { defaultRenderer, inlineRenderer } from './renderers';

/**
 * MarkdownOutput renders Markdown text in browser.
 * It is based on highlight.js, to customize the code blocks you can use highlight.js themes.
 * @category Form
 */
export default function MarkdownOutput(props) {
    const { id, className, style, value, variant } = props;
    const renderer = variant === 'inline' ? inlineRenderer : defaultRenderer;
    const result = useMarkdownToReact(value, renderer);
    return (
        <StyledContainer id={id} className={className} style={style} variant={variant}>
            {result}
        </StyledContainer>
    );
}

MarkdownOutput.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The markdown string to parse.  */
    value: PropTypes.string,
    /** The variant of the output. Possible values are `default` and `inline` */
    variant: PropTypes.oneOf(['default', 'inline']),
};

MarkdownOutput.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    value: '',
    variant: 'default',
};
