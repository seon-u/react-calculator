import CalcResult from './CalcResultContainer';
import { connect } from 'react-redux';
import { CalcState } from '../../store/modules/calc/types';
import { makeExpression, resetExpression } from '../../store/modules/calc/calc';
import { Dispatch } from 'redux';

interface IState {
    calc : CalcState;
};

interface IMapStateToProps {
    currentExpression : string;
    calculationResult : number;
    lastExpression : string;
};

interface IMapDispatchToProps {
    makeExpression : (button? : number | string, typeExpression? : number | string) => void;
    resetExpression : () => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    currentExpression : state.calc.currentExpression,
    calculationResult : state.calc.calculationResult,
    lastExpression : state.calc.lastExpression
});

const mapDispatchToProps  = (dispatch : Dispatch) : IMapDispatchToProps => ({
    makeExpression : (button? : number | string, typeExpression? : number | string) => dispatch(makeExpression(button, typeExpression)),
    resetExpression : () => dispatch(resetExpression())
});

export default connect<IMapStateToProps, IMapDispatchToProps>(mapStateToProps, mapDispatchToProps)(CalcResult);