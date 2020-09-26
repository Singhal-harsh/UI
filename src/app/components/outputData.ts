import {formData} from './formData'

export class outputData{

    
 
        public fwd_arb_amount : number;
	public fwd_arb_invest_amount : number;
	public fwd_arb_invest_amount_Curr1 : number;
	public profit_loss_fwd : number;
	public profit_loss_rev : number;
	public rev_arb_amount : number;
	public rev_arb_invest_amount : number;
	public rev_arb_invest_amount_Curr2 : number;
	public isFwdArbitrage : boolean;
	public isRevArbitrage: boolean;
	public arbitrage: formData;

    
}