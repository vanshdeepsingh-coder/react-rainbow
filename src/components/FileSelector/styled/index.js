import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import IconContainer from '../../Input/styled/iconContainer';
import ButtonIcon from '../../ButtonIcon';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import {
    BORDER_RADIUS_2,
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';
import {
    FONT_SIZE_TEXT_MEDIUM,
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_TEXT_SMALL,
} from '../../../styles/fontSizes';
import { PADDING_MEDIUM } from '../../../styles/paddings';
import replaceAlpha from '../../../styles/helpers/color/replaceAlpha';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const StyledDropzone = attachThemeAttrs(styled.div)`     
    position: relative;
    width: 100%;
    height: 2.5rem;
    padding: 4px;
    border: dashed 1px ${props => props.palette.text.disabled};
    border-radius: ${BORDER_RADIUS_2};
    background-color: ${props => props.palette.background.disabled};
    color: ${props => props.palette.text.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.8125rem;

    ${props =>
        props.size === 'large' &&
        `
            line-height: 3.275rem;
            font-size: ${FONT_SIZE_TEXT_LARGE};
            height: 3.4rem;
    `};

    ${props =>
        props.size === 'small' &&
        `
            line-height: 1.775rem;
            font-size: ${FONT_SIZE_TEXT_SMALL};
            height: 1.9rem;
    `};

    &:hover {
        cursor: pointer;
        border: dashed 1px ${props => props.palette.brand.main};
    }

    ${props =>
        props.hasFocus &&
        `
        outline: 0;
        border: solid 1px ${props.palette.brand.main};
        box-shadow: ${props.shadows.brand};
    `}

    ${props =>
        props.variant === 'multiline' &&
        `
        min-height: 12rem;
        border-radius: 27px;
        height: 100%;
        width: 100%;
    `}

    ${props =>
        props.error &&
        `
        color: ${props.palette.error.main};
        border: dashed 1px ${props.palette.error.main};
        background-color: ${replaceAlpha(props.palette.error.main, 0.1)};

        ${props.hasFocus &&
            `
            outline: 0;
            border: solid 1px ${props.palette.error.main};
            box-shadow: ${props.shadows.error};
        `}

        &:hover {
            border: dashed 1px ${props.palette.error.main};
        };
    `}

    ${props =>
        props.disabled &&
        `
        color: ${props.palette.text.disabled};
        border: dashed 1px ${props.palette.text.disabled};
        background-color: ${props.palette.background.disabled};

        &:hover {
            cursor: not-allowed;
            border-color: ${props.palette.text.disabled};
        }
    `}
    
    ${props =>
        props.isDragOver &&
        `
        color: ${props.palette.brand.main};
        background-color: ${replaceAlpha(props.palette.brand.main, 0.05)};
        border-color: ${props.palette.brand.main};
    `}


    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
        `};

    ${props =>
        props.borderRadius === 'semi-square' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_SQUARE};
        `};

    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
        `};

`;

export const TruncatedText = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    pointer-events: none;
`;

export const StyledBackdrop = attachThemeAttrs(styled.div)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2.35rem;
    padding-right: ${PADDING_MEDIUM};
    border-radius: ${BORDER_RADIUS_2};
    pointer-events: none;

    ${props =>
        props.size === 'small' &&
        `
            padding-left: 2rem;
        `};
    ${props =>
        props.size === 'large' &&
        `
            padding-left: 3rem;
        `};

    ${props =>
        props.isFileSelected &&
        `
        justify-content: left;
        background-color: ${props.palette.background.highlight};
        padding-right: 2.35rem;
        `}

    ${props =>
        props.variant === 'multiline' &&
        `
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: ${FONT_SIZE_TEXT_MEDIUM};
        padding: ${PADDING_MEDIUM};
        background: transparent;
        height: 100%;
        width: 100%;
        
        ${props.size === 'large' &&
            `
                font-size: ${FONT_SIZE_TEXT_LARGE};
            `};
    
        ${props.size === 'small' &&
            `
                font-size: ${FONT_SIZE_TEXT_SMALL};
            `};
    `}

    
    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
        `};

    ${props =>
        props.borderRadius === 'semi-square' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_SQUARE};
        `};

    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
        `};
`;

export const StyledIconContainer = attachThemeAttrs(styled(IconContainer))`
    svg {
        width: 24px !important;
        height: 24px !important;
        font-size: 24px !important;
        color: ${props => props.palette.brand.main};

        ${props =>
            props.error &&
            `
            color: ${props.palette.error.main};
        `}

        ${props =>
            props.disabled &&
            `
            color: ${props.palette.text.disabled};
        `}

        ${props =>
            props.isDragOver &&
            `
            color: ${props.palette.brand.main};
        `}

        ${props =>
            props.size === 'small' &&
            `
                width: 20px !important;
                height: 20px !important;
            `};
        ${props =>
            props.size === 'large' &&
            `
            width: 28px !important;
            height: 28px !important;
        `};
    }

    ${props =>
        props.isSingleFile &&
        props.variant === 'inline' &&
        `
        svg {
            width: 18px !important;
            height: 18px !important;
            font-size: 18px !important;
            ${props.size === 'small' &&
                `
                width: 14px !important;
                height: 14px !important;
            `};
            ${props.size === 'large' &&
                `
                width: 24px !important;
                height: 24px !important;
            `};
        }
    `}

    ${props =>
        props.iconPosition === 'left' &&
        `
        width: unset;
        left: 0.8rem;
        ${props.size === 'small' &&
            `
            left: 0.7rem;
        `};
        ${props.size === 'large' &&
            `
            left: 1.2rem;
        `};
    `}
    ${props =>
        props.iconPosition === 'right' &&
        `
            right: 0.3rem;
            ${props.size === 'small' &&
                `
                right: 0.1rem;
            `};
            ${props.size === 'large' &&
                `
                right: 0.6rem;
            `};
    `}

    ${props =>
        props.variant === 'multiline' &&
        `
        position: static;
        width: 64px;
        height: auto;
        margin-bottom: ${MARGIN_X_SMALL};
        svg {
            width: 64px !important;
            height: 64px !important;
            font-size: 64px !important;
            ${props.size === 'small' &&
                `
                width: 40px !important;
                height: 40px !important;
            `};
            ${props.size === 'large' &&
                `
                width: 80px !important;
                height: 80px !important;
            `};

            ${props.error &&
                `
                height: 40px !important;
                width: 40px !important;
                font-size: 40px !important;
                ${props.size === 'small' &&
                    `
                    height: 32px !important;
                    width: 32px !important;
                `};
                ${props.size === 'large' &&
                    `
                    height: 60px !important;
                    width: 60px !important;
                `};
            `}
        }
    `}
`;

export const StyledButtonIcon = styled(ButtonIcon)`
    width: unset;
    height: unset;
    pointer-events: auto;
    margin-right: 6px;
    ${props =>
        props.pickerVariant === 'multiline' &&
        `
        position: absolute;
        top: 12px;
        right: 2px;
    `}

    svg {
        pointer-events: none;
        width: 20px;
        height: 20px;
        ${props =>
            props.sizeIcon === 'small' &&
            `
                width: 16px !important;
                height: 16px !important;
            `};
        ${props =>
            props.sizeIcon === 'large' &&
            `
                width: 30px !important;
                height: 30px !important;
            `};
    }
`;

export const StyledInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;

    &:hover {
        cursor: pointer;
    }

    ${props =>
        props.disabled &&
        `
        &:hover {
            cursor: not-allowed;
        }
    `}
`;
