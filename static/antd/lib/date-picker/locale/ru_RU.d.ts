/**
 * Created by Andrey Gayvoronsky on 13/04/16.
 */
declare const locale: {
    lang: {
        locale: string;
        monthBeforeYear?: boolean | undefined;
        yearFormat: string;
        monthFormat?: string | undefined;
        today: string;
        now: string;
        backToToday: string;
        ok: string;
        timeSelect: string;
        dateSelect: string;
        weekSelect?: string | undefined;
        clear: string;
        month: string;
        year: string;
        previousMonth: string;
        nextMonth: string;
        monthSelect: string;
        yearSelect: string;
        decadeSelect: string;
        dayFormat: string;
        dateFormat: string;
        dateTimeFormat: string;
        previousYear: string;
        nextYear: string;
        previousDecade: string;
        nextDecade: string;
        previousCentury: string;
        nextCentury: string;
        shortWeekDays?: string[] | undefined;
        shortMonths?: string[] | undefined;
        placeholder: string;
        rangePlaceholder: string[];
    };
    timePickerLocale: {
        placeholder: string;
    };
};
export default locale;
