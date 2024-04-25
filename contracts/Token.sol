
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract MyToken is ERC20, Ownable, ERC20Permit {

    uint256 public total_Supply;
    uint8 public _decimals;

    constructor(string memory name, string memory symbol, uint256 _totalSupply, uint8 decimals)
        ERC20(name, symbol)
        Ownable(msg.sender)
        ERC20Permit("MyToken")
    {
        total_Supply = _totalSupply;
        _decimals = decimals;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(ERC20.totalSupply() + amount <= total_Supply, "Cap exceeded");
        _mint(to, amount);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}
