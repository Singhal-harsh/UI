export class formData{

    
 
	public spot_bid : number;
	public spot_ask : number;
	public forward_bid : number;
	public forward_ask : number;
	public interest_rate_curr1_bid : number;
	public interest_rate_curr1_ask : number;
	public interest_rate_curr2_bid : number;
	public interest_rate_curr2_ask : number;
	public transaction_cost : number;
	public fwd_arb_quantity : number;
	public time_months : number = 6;
	public arb: boolean= true;
	public mapping: boolean;
    public spot_b():boolean{
		if(this.spot_bid<0){return true;}
		
		else{return false;}
		
	};
	public spot_a():boolean{
		if(this.spot_bid>this.spot_ask){return true;}
		
		else{return false;}
		
	};
	public for_b():boolean{
		if(this.forward_bid<0){return true;}
		
		else{return false;}
		
	};
	public for_a():boolean{
		if(this.forward_bid>this.forward_ask){return true;}
		
		else{return false;}
		
	};
	public int1_b():boolean{
		if(this.interest_rate_curr1_bid<0){return true;}
		
		else{return false;}
		
	};
	public int1_a():boolean{
		if(this.interest_rate_curr1_bid>this.interest_rate_curr1_ask){return true;}
		
		else{return false;}
		
	};
	public int2_b():boolean{
		if(this.interest_rate_curr2_bid<0){return true;}
		
		else{return false;}
		
	};
	public int2_a():boolean{
		if(this.interest_rate_curr2_bid>this.interest_rate_curr2_ask){return true;}
		
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
	public fwd():boolean{
		if(this.fwd_arb_quantity<0){return true;}
		

		else{return false;}
		
	};
    
}