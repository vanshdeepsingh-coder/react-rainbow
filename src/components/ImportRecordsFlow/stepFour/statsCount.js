import React from 'react';
import PropTypes from 'prop-types';
import StyledStatsCardDescription from './styled/statsCardDescription';
import XCircle from '../icons/xCircle';
import CheckCircle from '../icons/checkCircle';
import RenderIf from '../../RenderIf';
import getPluralization from '../helpers/getPluralization';

const getCardDescription = (type, amount) => {
    const plural = type === 'success' ? '' : getPluralization(amount);
    return `${amount} ${type === 'success' ? 'Successful' : 'Error'}${plural}`;
};

export default function StatsCount(props) {
    const { type, amount } = props;
    const description = getCardDescription(type, amount);
    return (
        <>
            <RenderIf isTrue={type === 'success'}>
                <CheckCircle />
            </RenderIf>
            <RenderIf isTrue={type === 'error'}>
                <XCircle />
            </RenderIf>
            <StyledStatsCardDescription>{description}</StyledStatsCardDescription>
        </>
    );
}

StatsCount.propTypes = {
    type: PropTypes.oneOf(['success', 'error']),
    amount: PropTypes.number,
};

StatsCount.defaultProps = {
    type: 'success',
    amount: 0,
};
