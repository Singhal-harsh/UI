export class formDataCac{

    

	public spot_bid : number;
	public spot_ask : number;
	public future_bid : number;
	public future_ask : number;
	public interest_rate_bid : number;
	public interest_rate_ask : number;
	public transaction_cost : number;
	public quantity : number;
	public time_months : number;
    public mapping: boolean;
    public spot_b():boolean{
		if(this.spot_bid<0){return true;}
		
		else{return false;}
		
	};
	public spot_a():boolean{
		if(this.spot_bid>this.spot_ask){return true;}
		
		else{return false;}
		
	};
	public future_b():boolean{
		if(this.future_bid<0){return true;}
		
		else{return false;}
		
	};
	public future_a():boolean{
		if(this.future_bid>this.future_ask){return true;}
		
		else{return false;}
		
	};
	public int_b():boolean{
		if(this.interest_rate_bid<0){return true;}
		
		else{return false;}
		
	};
	public int_a():boolean{
		if(this.interest_rate_bid>this.interest_rate_ask){return true;}
		
		else{return false;}
		
	};
	public timecheck():boolean{
		if(this.time_months>12||this.time_months<0){return true;}
		
		else {return false;}
	};
	public tc():boolean{
		if(this.transaction_cost<0){return true;}
		

		else{return false;}
		
	};
	public q():boolean{
		if(this.quantity<0){return true;}
		

		else{return false;}
		
	};
}