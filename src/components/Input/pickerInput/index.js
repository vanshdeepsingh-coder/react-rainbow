import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import Label from '../label';
import RenderIf from '../../RenderIf';
import RelativeElement from '../../Structural/relativeElement';
import StyledContainer from '../styled/container';
import StyledIconContainer from '../styled/iconContainer';
import HelpText from '../styled/helpText';
import ErrorText from '../styled/errorText';
import StyledReadonlyInput from '../inputBase/styled/input';
import StyledPickerInput from './styled/input';
import getValueAlignment from '../helpers/getValueAlignment';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('input');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
        this.inputRef = React.createRef();
    }

    getInlineTextLabelId() {
        const { bottomHelpText } = this.props;
        if (bottomHelpText) {
            return this.inlineTextLabelId;
        }
        return undefined;
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.inputRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.inputRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.inputRef.current.blur();
    }

    renderInput() {
        const { props } = this;
        const { readOnly, isCentered, valueAlignment } = props;
        const alignment = getValueAlignment({ valueAlignment, isCentered });

        if (readOnly) {
            return (
                <StyledReadonlyInput
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...props}
                    id={this.inputId}
                    readOnly
                    aria-labelledby={this.getInlineTextLabelId()}
                    aria-describedby={this.getErrorMessageId()}
                    autoComplete="off"
                    valueAlignment={alignment}
                    ref={this.inputRef}
                />
            );
        }

        return (
            <StyledPickerInput
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props}
                id={this.inputId}
                readOnly
                aria-labelledby={this.getInlineTextLabelId()}
                aria-describedby={this.getErrorMessageId()}
                autoComplete="off"
                valueAlignment={alignment}
                ref={this.inputRef}
            />
        );
    }

    render() {
        const {
            className,
            style,
            label,
            error,
            readOnly,
            icon,
            bottomHelpText,
            required,
            id,
            hideLabel,
            labelAlignment,
            iconPosition,
            size,
        } = this.props;

        return (
            <StyledContainer id={id} className={className} style={style} readOnly={readOnly}>
                <Label
                    label={label}
                    labelAlignment={labelAlignment}
                    hideLabel={hideLabel}
                    required={required}
                    inputId={this.inputId}
                    readOnly={readOnly}
                    id={this.getInlineTextLabelId()}
                    size={size}
                />
                <RelativeElement>
                    <RenderIf isTrue={icon}>
                        <StyledIconContainer
                            iconPosition={iconPosition}
                            readOnly={readOnly}
                            error={error}
                            size={size}
                        >
                            {icon}
                        </StyledIconContainer>
                    </RenderIf>
                    {this.renderInput()}
                </RelativeElement>
                <RenderIf isTrue={bottomHelpText}>
                    <HelpText alignSelf="center">{bottomHelpText}</HelpText>
                </RenderIf>
                <RenderIf isTrue={error}>
                    <ErrorText alignSelf="center" id={this.getErrorMessageId()}>
                        {error}
                    </ErrorText>
                </RenderIf>
            </StyledContainer>
        );
    }
}

Input.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf([
        'text',
        'password',
        'datetime',
        'datetime-local',
        'date',
        'month',
        'time',
        'week',
        'number',
        'email',
        'url',
        'search',
        'tel',
        'color',
    ]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    placeholder: PropTypes.string,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    required: PropTypes.bool,
    pattern: PropTypes.string,
    /** @deprecated Backward compatibility only. Use `valueAlignment` instead. */
    isCentered: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    autoComplete: PropTypes.string,
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    hideLabel: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    valueAlignment: PropTypes.oneOf(['left', 'center', 'right']),
};

Input.defaultProps = {
    value: undefined,
    name: undefined,
    type: 'text',
    label: undefined,
    placeholder: undefined,
    icon: undefined,
    iconPosition: 'left',
    maxLength: undefined,
    minLength: undefined,
    bottomHelpText: null,
    required: false,
    pattern: undefined,
    isCentered: false,
    error: null,
    disabled: false,
    readOnly: false,
    onChange: () => {},
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
    autoComplete: 'on',
    labelAlignment: 'center',
    hideLabel: false,
    size: 'medium',
    valueAlignment: 'left',
};
