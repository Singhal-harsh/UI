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
	
	public askbid(): boolean{
		if(this.spot_ask < this.spot_bid){
			return true;
		}
	}
    
}