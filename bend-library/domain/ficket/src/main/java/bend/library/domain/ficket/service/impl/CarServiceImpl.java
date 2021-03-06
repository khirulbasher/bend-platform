package bend.library.domain.ficket.service.impl;

import bend.library.config.exception.DataNotFoundException;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.crud.flexible.FlexibleIndex;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.AbstractBaseService;
import bend.library.domain.ficket.entity.Car;
import bend.library.domain.ficket.repositories.CarRepository;
import bend.library.domain.ficket.service.CarService;
import bend.library.domain.ficket.service.SeatService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class CarServiceImpl extends AbstractBaseService<Car> implements CarService {
    private final @NonNull SeatService seatService;
    private final @NonNull CarRepository carRepository;

    @Override
    public Set<String> extractSetsFromCar(BigInteger carId) {
        return carRepository.findSeatStructure(carId).map(seatService::extractSetsFromStructure).orElse(null);
    }

    @Override
    public String findSeatStructure(BigInteger carId) {
        return carRepository.findSeatStructure(carId).orElse(null);
    }

    @Override
    public Car findCarById(BigInteger carId) {
        return carRepository.findById(carId).orElseThrow(DataNotFoundException::new);
    }

    @Override
    public PageableDataResponse<BaseFlexibleCrudeViewData> findAllFlexibleOnlyActive(Pageable pageable) {
        return makeFlexible(carRepository.findAllFlexibleOnlyActive(pageable));
    }

    @Override
    protected String[] flexibleColumns() {
        return new String[]{"Name"};
    }

    @Override
    protected int idIndexOfFlexibility() {
        return 1;
    }

    @Override
    protected FlexibleIndex[] flexibleIndices() {
        return new FlexibleIndex[]{FlexibleIndex.of(0)};
    }
}
