"""Bad vs good code example: assert vs validation."""

# ❌ BAD CODE (for comparison)
def bad_apply_discount(price, discount):
    # Bad: `assert` is used
    # for runtime validation.
    final_price = price * (1 - discount)
    assert 0 <= final_price <= price
    return final_price

# ✅ GOOD CODE (cleaner version)
def apply_discount(
    price: float,
    discount: float,
) -> float:

    if not 0 <= discount <= 1:
        raise ValueError(
            "discount must be"
            " between 0 and 1"
        )

    return price * (1 - discount)

if __name__ == "__main__":
    price = 1200
    discount = 0.5

    print(
        "Bad code result:",
        bad_apply_discount(price, discount),
    )
    print(
        "Good code result:",
        apply_discount(price, discount),
    )
    