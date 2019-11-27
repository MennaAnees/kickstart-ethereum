pragma solidity ^0.4.17;

contract CamapignFactory{

    address[] public deployedCampaigns; //dynamic arr of type address
    
    function createCampaign(uint minimum) public{
        //create new contract of Camapign and get deployed on blockchain
        // msg is a global var given by solidity i can use inside the funcs
        address newCampaign= new Camapign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
    
}

contract Camapign{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    //here we dont repeat ourselves
    modifier restricted(){
        // global func for validation if expression inside is true we continue execute
        //here we check the one who will execute the func is the manager
        require(msg.sender == manager);
        _;
    }
    
    function Camapign(uint minimum, address creater) public{
        manager = creater;
        minimumContribution = minimum;
    }
    
    //func able to recieve some amount of money (payable)
    function contribute() public payable{
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount ++;
        
    }
    
    function createRequest(string description, uint value, address recipient) 
     public restricted{
        Request memory newRequest = Request({
            description:description,
            value: value,
            recipient:recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public{
        
    //we want to change the original Request
    Request storage request = requests[index];
    
        //make sure he is one of the doners
    require(approvers[msg.sender]);    
    
    //make sure he has not approved it before
    require(!request.approvals[msg.sender]);
    
    request.approvals[msg.sender] = true;
    request.approvalCount ++;
    
    
    }
    
    function finalizeRequest(uint index) public restricted{
        
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount / 2));
        
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, address
    ){
    return(
        minimumContribution,
        this.balance,
        requests.length,
        approversCount,
        manager
        );
    }

    function getRequestCount() public view returns (uint){
        return requests.length;
    }

} 
