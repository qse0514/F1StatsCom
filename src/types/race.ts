export type RaceResult = {
  position: string
  points: string
  Driver: {
    code: string
    givenName: string
    familyName: string
    nationality: string
  }
  Constructor: {
    name: string
  }
  Time?: {
    time: string
  }
  status: string
}

export type Race = {
  round: string
  raceName: string
  date: string
  Circuit: {
    circuitName: string
    Location: {
      locality: string
      country: string
    }
  }
  Results: RaceResult[]
}

export type DriverStanding = {
  position: string
  points: string
  wins: string
  Driver: {
    driverId: string
    code: string
    givenName: string
    familyName: string
    nationality: string
  }
  Constructors: {
    name: string
    constructorId: string
  }[]
}

export type ConstructorStanding = {
  position: string
  points: string
  wins: string
  Constructor: {
    constructorId: string
    name: string
    nationality: string
  }
}
