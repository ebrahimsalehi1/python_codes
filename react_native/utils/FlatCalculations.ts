// Rating for the purchase price factor
export type PurchasePriceFactorRating = {
  score: 1 | 2 | 3 | 4 | 5;
  status: string;
};

export class PurchasePriceFactor {
  readonly monthlyRent: number;
  readonly purchasePrice: number;
  readonly annualNetRent: number;

  constructor(monthlyRent: number, purchasePrice: number) {
    this.monthlyRent = monthlyRent;
    this.purchasePrice = purchasePrice;
    this.annualNetRent = PurchasePriceFactor.calcAnnualNetRent(monthlyRent);
  }

  // Jährliche Nettomiete
  static calcAnnualNetRent(monthlyRent: number): number {
    return monthlyRent * 12;
  }

  // Kaufpreisfaktor
  static calcPurchasePriceFactor(
    purchasePrice: number,
    annualNetRent: number
  ): number {
    return Math.round(purchasePrice / annualNetRent);
  }

  static ratePurchasePriceFactor(
    purchasePriceFactor: number
  ): PurchasePriceFactorRating {
    if (purchasePriceFactor > 34) {
      return { score: 1, status: "Very expensive (severe bubble)" };
    }
    if (purchasePriceFactor >= 31) {
      return { score: 2, status: "More expensive than market average" };
    }
    if (purchasePriceFactor >= 28) {
      return { score: 3, status: "Normal and reasonable for Hanover" };
    }
    if (purchasePriceFactor >= 25) {
      return { score: 4, status: "Well-priced and fair (recommended)" };
    }
    return { score: 5, status: "A steal and exceptionally cheap!" };
  }

  get purchasePriceFactor(): number {
    return PurchasePriceFactor.calcPurchasePriceFactor(
      this.purchasePrice,
      this.annualNetRent
    );
  }

  get rating(): PurchasePriceFactorRating {
    return PurchasePriceFactor.ratePurchasePriceFactor(
      this.purchasePriceFactor
    );
  }
}

// Rating for the gross rental yield (Bruttomietrendite)
export type GrossRentalYieldRating = {
  score: 1 | 2 | 3 | 4 | 5;
  status: string;
};

export class GrossRentalYield {
  readonly monthlyRent: number;
  readonly purchasePrice: number;
  readonly annualNetRent: number;

  constructor(monthlyRent: number, purchasePrice: number) {
    this.monthlyRent = monthlyRent;
    this.purchasePrice = purchasePrice;
    this.annualNetRent = PurchasePriceFactor.calcAnnualNetRent(monthlyRent);
  }

  // Bruttomietrendite (in percent)
  static calcGrossRentalYield(
    annualNetRent: number,
    purchasePrice: number
  ): number {
    return (annualNetRent / purchasePrice) * 100;
  }

  static rateGrossRentalYield(
    grossRentalYield: number
  ): GrossRentalYieldRating {
    if (grossRentalYield < 3.0) {
      return {
        score: 1,
        status: "Very weak (below bank interest)",
      };
    }
    if (grossRentalYield < 3.5) {
      return { score: 2, status: "Below expectations" };
    }
    if (grossRentalYield < 4.0) {
      return { score: 3, status: "Average and standard for the city" };
    }
    if (grossRentalYield <= 4.5) {
      return { score: 4, status: "Very good and profitable" };
    }
    return { score: 5, status: "Excellent and outstanding for investment" };
  }

  get grossRentalYield(): number {
    return GrossRentalYield.calcGrossRentalYield(
      this.annualNetRent,
      this.purchasePrice
    );
  }

  get rating(): GrossRentalYieldRating {
    return GrossRentalYield.rateGrossRentalYield(this.grossRentalYield);
  }
}

// Rating for the building service charge per square meter (house fees per m²)
export type HouseFeesPerSquareMeterRating = {
  score: 1 | 2 | 3 | 4 | 5;
  status: string;
};

export class HouseFeesPerSquareMeter {
  readonly houseFees: number;
  readonly livingArea: number;

  constructor(houseFees: number, livingArea: number) {
    this.houseFees = houseFees;
    this.livingArea = livingArea;
  }

  // House fees per m² (in EUR)
  static calcHouseFeesPerSquareMeter(
    houseFees: number,
    livingArea: number
  ): number {
    return houseFees / livingArea;
  }

  static rateHouseFeesPerSquareMeter(
    houseFeesPerSquareMeter: number
  ): HouseFeesPerSquareMeterRating {
    if (houseFeesPerSquareMeter > 5.5) {
      return {
        score: 1,
        status: "Very expensive (risky for your wallet)",
      };
    }
    if (houseFeesPerSquareMeter > 4.5) {
      return { score: 2, status: "High and heavy" };
    }
    if (houseFeesPerSquareMeter > 3.5) {
      return {
        score: 3,
        status: "Normal and standard for German apartments",
      };
    }
    if (houseFeesPerSquareMeter >= 2.5) {
      return { score: 4, status: "Economical and efficient" };
    }
    return { score: 5, status: "Exceptionally low and excellent" };
  }

  get houseFeesPerSquareMeter(): number {
    return HouseFeesPerSquareMeter.calcHouseFeesPerSquareMeter(
      this.houseFees,
      this.livingArea
    );
  }

  get rating(): HouseFeesPerSquareMeterRating {
    return HouseFeesPerSquareMeter.rateHouseFeesPerSquareMeter(
      this.houseFeesPerSquareMeter
    );
  }
}

// Rating for the annual rent potential (Jahreskaltmiete)
// scored by how much of the monthly bank installment the rent covers
export type AnnualRentPotentialRating = {
  score: 1 | 2 | 3 | 4 | 5;
  status: string;
};

export class AnnualRentPotential {
  readonly monthlyRent: number;
  readonly monthlyInstallment: number;
  readonly annualNetRent: number;

  constructor(monthlyRent: number, monthlyInstallment: number) {
    this.monthlyRent = monthlyRent;
    this.monthlyInstallment = monthlyInstallment;
    this.annualNetRent = PurchasePriceFactor.calcAnnualNetRent(monthlyRent);
  }

  // Installment coverage ratio (in percent)
  static calcInstallmentCoverage(
    monthlyRent: number,
    monthlyInstallment: number
  ): number {
    return (monthlyRent / monthlyInstallment) * 100;
  }

  static rateInstallmentCoverage(
    installmentCoverage: number
  ): AnnualRentPotentialRating {
    if (installmentCoverage <= 50) {
      return {
        score: 1,
        status:
          "Severely negative cash flow (significant out-of-pocket required)",
      };
    }
    if (installmentCoverage <= 70) {
      return {
        score: 2,
        status: "Needs a moderate monthly subsidy from your salary",
      };
    }
    if (installmentCoverage <= 85) {
      return {
        score: 3,
        status: "Break-even and standard for personal residence",
      };
    }
    if (installmentCoverage <= 100) {
      return {
        score: 4,
        status: "Very good (the property nearly pays for itself)",
      };
    }
    return {
      score: 5,
      status: "Positive cash flow (ideal for investors)",
    };
  }

  get installmentCoverage(): number {
    return AnnualRentPotential.calcInstallmentCoverage(
      this.monthlyRent,
      this.monthlyInstallment
    );
  }

  get rating(): AnnualRentPotentialRating {
    return AnnualRentPotential.rateInstallmentCoverage(
      this.installmentCoverage
    );
  }
}
