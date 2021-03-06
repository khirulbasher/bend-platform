package bend.library.domain.ficket.service.impl;

import bend.library.domain.ficket.entity.SeatConfig;
import bend.library.domain.ficket.repositories.CarRepository;
import bend.library.domain.ficket.service.SeatService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class SeatServiceImpl implements SeatService {
    private final @NonNull CarRepository carRepository;

    @Override
    public void printSeatStructure(final SeatConfig seatConfig) {
        String[] rows = seatConfig.getSeatStructure().split(ROW_SEPARATOR_REGEX);
        StringBuilder builder = new StringBuilder();
        for (String row : rows) {
            String[] plays = row.split(LINE_SEPARATOR_REGEX);
            String[] seats = plays[0].split(SEAT_SEPARATOR_REGEX);
            for (String seat : seats)
                builder.append(String.format("%2s ", seat));
            builder.append("|  | ");
            seats = plays[1].split(SEAT_SEPARATOR_REGEX);
            for (String seat : seats)
                builder.append(String.format("%2s ", seat));
            builder.deleteCharAt(builder.length() - 1).append('\n');
        }
        System.out.print(builder);
    }

    @Override
    public Set<String> extractSetsFromStructure(SeatConfig seatConfig) {
        return extractSetsFromStructure(seatConfig.getSeatStructure());
    }

    @Override
    public Set<String> extractSetsFromStructure(final String seatStructure) {
        Set<String> seatSet = new LinkedHashSet<>();
        String[] rows = seatStructure.split(ROW_SEPARATOR_REGEX);
        for (String row : rows) {
            String[] plays = row.split(LINE_SEPARATOR_REGEX);
            for (String play : plays) {
                for (String seat : play.split(SEAT_SEPARATOR_REGEX))
                    if (seat != null && !seat.isBlank())
                        seatSet.add(seat);
            }
        }
        return seatSet;
    }

    @Override
    public Optional<SeatConfig> findSeatConfigByCarId(BigInteger carId) {
        return carRepository.findSeatConfigByCarId(carId);
    }
}
