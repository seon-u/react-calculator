import { connect } from 'react-redux';
import CaclButton from './CalcButtonContainer';
import { makeExpression, resetExpression, calculate } from '../../store/modules/calc/calc';
import { Dispatch } from 'redux';

interface IMapStateToProps {}

interface IMapDispatchToProps {
    makeExpression : (button : number | string) => void;
    resetExpression : () => void;
    calculate : () => void;
};

const mapDispatchToProps = (dispatch : Dispatch) : IMapDispatchToProps => ({
    makeExpression : (button : number | string) => dispatch(makeExpression(button)),
    resetExpression : () => dispatch(resetExpression()),
    calculate : () => dispatch(calculate())
});

export default connect<IMapStateToProps, IMapDispatchToProps>(null, mapDispatchToProps)(CaclButton);