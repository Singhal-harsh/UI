export class FormDataFra{

	public interest_rate1_bid : number; //6 months
	public  interest_rate1_ask:number; //6 months
	public  interest_rate2_bid:number; //12 months
	public  interest_rate2_ask:number; //12 months
	
	public  fra_rate_bid:number; /* 6/12 fra */
	public  fra_rate_ask:number; /* 6/12 fra */
	
	public  transaction_cost:number;
	public  notional_amount:number;
	public int1_b():boolean{
		if(this.interest_rate1_bid<0){return true;}
		
		else{return false;}
		
	};
	public int1_a():boolean{
		if(this.interest_rate1_bid>this.interest_rate1_ask){return true;}
		
		else{return false;}
		
	};
	public int2_b():boolean{
		if(this.interest_rate2_bid<0){return true;}
		
		else{return false;}
		
	};
	public int2_a():boolean{
		if(this.interest_rate2_bid>this.interest_rate2_ask){return true;}
		
		else{return false;}
		
	};
	public fra_b():boolean{
		if(this.fra_rate_bid<0){return true;}
		
		else{return false;}
		
	};
	public fra_a():boolean{
		if(this.fra_rate_bid>this.fra_rate_ask){return true;}
		
		else{return false;}
		
	};
	
	public tc():boolean{
		if(this.transaction_cost<0){return true;}
		

		else{return false;}
		
	};
	public notion():boolean{
		if(this.notional_amount<0){return true;}
		

		else{return false;}
		
	};
}