$(document).ready(function () {

    // tooltip display for icons
    $('[tool-tip-toggle="tooltip-icon"]').tooltip({
        placement: 'top'
    });

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#workflow-delegation-dataTable').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#workflow-delegation-dataTable').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#dataTable').DataTable({
            "searching": true,
            "columnDefs": [{
                "targets": [3],
                "orderable": false
                }],
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#dataTable').DataTable({
            "searching": true,
            "columnDefs": [{
                "targets": [3],
                "orderable": false
                }],
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#catalog-dataTable').DataTable({
            "searching": true,
            "columnDefs": [{
                "targets": [1],
                "orderable": false
                }],
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#catalog-dataTable').DataTable({
            "searching": true,
            "columnDefs": [{
                "targets": [1],
                "orderable": false
                }],
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbSCWReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbSCWReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbMPPReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbMPPReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbStaffReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbStaffReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbGradeChangeReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbGradeChangeReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbMajorMinorChangeReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbMajorMinorChangeReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbTempFacultyPayrollReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbTempFacultyPayrollReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbNewPositionDescriptionStaffReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbNewPositionDescriptionStaffReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbEmployeeFeeWaiverReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbEmployeeFeeWaiverReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbNewPositionDescriptionManagerReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbNewPositionDescriptionManagerReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbDependentFeeWaiverReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbDependentFeeWaiverReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbDomesticPartnerTaxCertificationReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbDomesticPartnerTaxCertificationReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbStd682OvertimeDistributedReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbStd682OvertimeDistributedReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbShortAppEmpFeeWaiverReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbShortAppEmpFeeWaiverReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbPersonnelFileAccessReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbPersonnelFileAccessReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbPFA').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbPFA').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbCareerDevReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbCareerDevReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

 /*   if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbOtsdReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbOtsdReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }
	*/


    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbPersonnelActionNoticeReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbPersonnelActionNoticeReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbMiscPayrollReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbMiscPayrollReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbManualcdReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbManualcdReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbTimebaseChangeRequestReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbTimebaseChangeRequestReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbCataLeaveDonation').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbCataLeaveDonation').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbPayPlanReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbPayPlanReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }


    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbDockNoticeReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbDockNoticeReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbDoaReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbDoaReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbhourlyINTReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbhourlyINTReport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#tbsplconreport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#tbsplconreport').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }
 if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbSTReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbSTReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

  if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbOtsdReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbOtsdReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

  if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbConfTicketReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbConfTicketReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

  if (window.matchMedia("(max-width: 767px)").matches) {
        $('#workflow-administration-dataTable').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "paging": true,
            "pagingType": "numbers",
            responsive: true,
            scrollX: true,
            "sScrollX": "100%",
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    } else {
        $('#workflow-administration-dataTable').DataTable({
            "searching": true,
            "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
            "pagingType": "numbers",
            "paging": true,
            dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
            language: {
                searchPlaceholder: "Type here to search"
            }
        });
    }
    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbAppealsReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbAppealsReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

  if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbLOAReport').DataTable( {      
			  "searching": true ,
			  "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			  "paging": true,
			  "pagingType":  "numbers",
			  responsive: true,
			  scrollX: true,
			  "sScrollX": "100%",
			  dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			  language: {
				searchPlaceholder: "Type here to search"
			  }
		} );
    }
	else {      
        $('#tbLOAReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
		} );
	}


  if (window.matchMedia("(max-width: 767px)").matches) {
	$('#tbCatalogYearReport').DataTable({
		"searching": true,
		"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
		"paging": true,
		"pagingType": "numbers",
		responsive: true,
		scrollX: true,
		"sScrollX": "100%",
		dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
		language: {
			searchPlaceholder: "Type here to search"
		}
	});
  } 
  else {
	$('#tbCatalogYearReport').DataTable({
		"searching": true,
		"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
		"pagingType": "numbers",
		"paging": true,
		dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
		language: {
			searchPlaceholder: "Type here to search"
		}
	});
  }

  if (window.matchMedia("(max-width: 767px)").matches) {
	$('#tbLateAddsReport').DataTable({
		"searching": true,
		"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
		"paging": true,
		"pagingType": "numbers",
		responsive: true,
		scrollX: true,
		"sScrollX": "100%",
		dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
		language: {
			searchPlaceholder: "Type here to search"
		}
	});
  } 
  else {
	$('#tbLateAddsReport').DataTable({
		"searching": true,
		"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
		"pagingType": "numbers",
		"paging": true,
		dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
		language: {
			searchPlaceholder: "Type here to search"
		}
	});
  }  

     if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbFAERReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbFAERReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

  if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbPetitionReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbPetitionReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  } 

    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbMPPJustificationReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbMPPJustificationReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }  
if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbTelecommuteReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbTelecommuteReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }  

  if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbFARReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbFARReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }
     if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbFARFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbFARFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }
    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbDOAARFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbDOAARFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }
    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbCSARFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbCSARFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }
    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbHRARFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbHRARFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

   if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbRequestForExcessUnitsReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbRequestForExcessUnitsReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }  
    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbSFTSReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbSFTSReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }
    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbTASubAFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbTASubAFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  } if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbChairDirectorAFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbChairDirectorAFReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }
    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbFERPReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbFERPReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }
    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbSFSDReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbSFSDReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbPRTBReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbPRTBReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }
  if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbTASubTSReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbTASubTSReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

  if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbCbeDeclarationReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbCbeDeclarationReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }  

    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbps980Report').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbps980Report').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }    

  if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#taxFilingStatementReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#taxFilingStatementReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

  if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#familySizeCertificateReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#familySizeCertificateReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }   

    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#citizenshipVerificationReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#citizenshipVerificationReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }  

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbFacultySpecialConsultantStipendReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbFacultySpecialConsultantStipendReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbRequestForTimeConflictReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbRequestForTimeConflictReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbSectionChangeReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbSectionChangeReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbIdVerificationStatementReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbIdVerificationStatementReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

         if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbImmigrationCitizenshipReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbImmigrationCitizenshipReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbCalGrantTransferReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbCalGrantTransferReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbSAPAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbSAPAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbUnitCapAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbUnitCapAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbLoanStatusVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbLoanStatusVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbStudentNonFiler').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbStudentNonFiler').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbFacultyAssignedTimeAgreementReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbFacultyAssignedTimeAgreementReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbFederalAidRefundVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbFederalAidRefundVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbStudentDependentsVerificationReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbStudentDependentsVerificationReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbStudentW2StatementReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbStudentW2StatementReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

       if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbVerificationOfNonFilingReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbVerificationOfNonFilingReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbNonFilerReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbNonFilerReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbFederalDirectLoanRequestReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbFederalDirectLoanRequestReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbParentStatementOfNonSupportReportModel').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbParentStatementOfNonSupportReportModel').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbFederalDirectGradPlusLoanReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbFederalDirectGradPlusLoanReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }
	  
   if (window.matchMedia("(max-width: 767px)").matches) {             
        $('#tbParentAmendedTaxReturnReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "paging": true,
          "pagingType":  "numbers",
          responsive: true,
          scrollX: true,
          "sScrollX": "100%",
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
      } else {      
        $('#tbParentAmendedTaxReturnReport').DataTable( {      
          "searching": true ,
          "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
          "pagingType":  "numbers",
          "paging": true, 
          dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
          language: {
            searchPlaceholder: "Type here to search"
          }
     } );
  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbDroneFlightRequestReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbDroneFlightRequestReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }   

          if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbTDAExceptionUGReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbTDAExceptionUGReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbFederalDirectPlusApplicationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbFederalDirectPlusApplicationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbTDAExceptionGradReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbTDAExceptionGradReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbAwardAdjustmentAppealInboxReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbAwardAdjustmentAppealInboxReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbDependencyOverrideRenewalReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbDependencyOverrideRenewalReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbDependencyOverrideAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbDependencyOverrideAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbStudentBudgetAdjustmentAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbStudentBudgetAdjustmentAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbTEACHGrantRequirementCertInboxReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbTEACHGrantRequirementCertInboxReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbSummerLoanRequestReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbSummerLoanRequestReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbStudentProjectedYearIncomeAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbStudentProjectedYearIncomeAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbUnaccompaniedhomlessyouthverificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbUnaccompaniedhomlessyouthverificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbTitanCardReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbTitanCardReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbStateUniversityGrantAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbStateUniversityGrantAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbReqToCancelFinancialAidProcessingReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbReqToCancelFinancialAidProcessingReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbChafeeStudentSuccessPlanReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbChafeeStudentSuccessPlanReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbGoldenStateTeacherGrantReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbGoldenStateTeacherGrantReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbVeteranStatusVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbVeteranStatusVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbSsnVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbSsnVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbPetitionPGCreditReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbPetitionPGCreditReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbPetitionGEVariationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbPetitionGEVariationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbStudyAbroadAcademicTranscriptSubmissionReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbStudyAbroadAcademicTranscriptSubmissionReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbAssetInformationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbAssetInformationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }


    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbInvestmentRealEstateVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbInvestmentRealEstateVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }


    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbPensionRollOverReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbPensionRollOverReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbFederalTaxReturnReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbFederalTaxReturnReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

        if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbFederalTaxReturnScheduleEReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbFederalTaxReturnScheduleEReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbConcurrentEnrollmentAgreementFallReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbConcurrentEnrollmentAgreementFallReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbConcurrentEnrollmentAgreementSpringReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbConcurrentEnrollmentAgreementSpringReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbHousingUpdateFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbHousingUpdateFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbBusinessSupplementReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbBusinessSupplementReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbPetitionforRetroactiveWithdrawalReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbPetitionforRetroactiveWithdrawalReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbPosthumousDegreeApprovalReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbPosthumousDegreeApprovalReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbTeachGrantSupplementReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbTeachGrantSupplementReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbFamilyCollegeEnrollmentVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbFamilyCollegeEnrollmentVerificationReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbProjectedYearIncomeAppealInboxReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbProjectedYearIncomeAppealInboxReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbDqAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbDqAppealReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbNachaFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbNachaFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbnewAssetAcquisitionFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbnewAssetAcquisitionFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbLostStolenPropertyreport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbLostStolenPropertyreport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbVehicleReleaseFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbVehicleReleaseFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbOffCampusAgreementUsereport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 

	  else {
		$('#tbOffCampusAgreementUsereport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbAppealofaDeclinedFeeWaiverReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 

	  else {
		$('#tbAppealofaDeclinedFeeWaiverReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbPETReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 

	  else {
		$('#tbPETReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbpropertySurveyReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
    else {
		$('#tbpropertySurveyReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbpropertyTransferReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
    else {
		$('#tbpropertyTransferReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbRetroactiveLOAReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 

	  else {
		$('#tbRetroactiveLOAReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }


    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbCLR').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 

	  else {
		$('#tbCLR').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

     if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbVerificationReqFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbVerificationReqFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }
    
      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbpropertySurveyreport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }
      else {
		$('#tbpropertySurveyreport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }
      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbpropertyTransferRequestreport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
      else {
		$('#tbpropertyTransferRequestreport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

	  if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbVolunteerFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbVolunteerFormReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbuniversityWithdrawalReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbuniversityWithdrawalReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbrfiReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbrfiReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbdesignationCashReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbdesignationCashReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbauthorizationDriverRecordInfoReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbauthorizationDriverRecordInfoReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbauthorizationPrivateOwnedVehiclesReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbauthorizationPrivateOwnedVehiclesReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

      if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbauthorizationVehicleUniversityBusinessReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbauthorizationVehicleUniversityBusinessReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }

    if (window.matchMedia("(max-width: 767px)").matches) {
		$('#tbvendorFeeWaiverReductionReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"paging": true,
			"pagingType": "numbers",
			responsive: true,
			scrollX: true,
			"sScrollX": "100%",
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  } 
	  else {
		$('#tbvendorFeeWaiverReductionReport').DataTable({
			"searching": true,
			"lengthMenu": [[10, 20, -1], [10, 20, "All"]],
			"pagingType": "numbers",
			"paging": true,
			dom: '<"search-input"f>rt<"row"<"show-entries col-sm-6 col-md-4 col-lg-4 col-6"l><"show-result col-sm-6 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-6 col-md-4 col-lg-4 col-12"p>>',
			language: {
				searchPlaceholder: "Type here to search"
			}
		});
	  }




    // Inbox datatable details
    $('#inbox-dataTable').DataTable({
        "searching": true,
        'columnDefs': [
            {
                'targets': 0,
                'checkboxes': {
                    'selectRow': true
                }
         }
      ],
        "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
        "pagingType": "numbers",
        "paging": true,
        dom: 'rt<"row"<"show-entries col-sm-3 col-md-4 col-lg-4 col-6"l><"show-result col-sm-4 col-md-4 col-lg-4 col-6"i><"show-pagination col-sm-5 col-md-4 col-lg-4 col-12"p>>',
        language: {
            searchPlaceholder: "Type here to search"
        },
    });

    var table = $('#dataTable').DataTable();
    var table1 = $('#inbox-dataTable').DataTable();
    var table2 = $('#catalog-dataTable').DataTable();
    var table3 = $('#tbSCWReport').DataTable();
    var table4 = $('#tbMPPReport').DataTable();
    var table5 = $('#tbStaffReport').DataTable();
    var table6 = $('#tbGradeChangeReport').DataTable();
    var table7 = $('#tbMajorMinorChangeReport').DataTable();
    var table8 = $('#tbTempFacultyPayrollReport').DataTable();
    var table9 = $('#tbNewPositionDescriptionStaffReport').DataTable();
    var table10 = $('#tbEmployeeFeeWaiverReport').DataTable();
    var table11 = $('#tbNewPositionDescriptionManagerReport').DataTable();
    var table12 = $('#tbDependentFeeWaiverReport').DataTable();
    var table13 = $('#tbDomesticPartnerTaxCertificationReport').DataTable();
    var table14 = $('#tbStd682OvertimeDistributedReport').DataTable();
    var table15 = $('#tbShortAppEmpFeeWaiverReport').DataTable();
    var table16 = $('#tbCLR').DataTable();
    var table17 = $('#tbPersonnelFileAccessReport').DataTable();
    var table18 = $('#tbCareerDevReport').DataTable();
    //var table19 = $('#tbOtsdReport').DataTable();
    var table20 = $('#tbPersonnelActionNoticeReport').DataTable();
    var table21 = $('#tbMiscPayrollReport').DataTable();
    var table22 = $('#tbManualcdReport').DataTable();
    var table23 = $('#tbTimebaseChangeRequestReport').DataTable();
    var table24 = $('#tbCataLeaveDonation').DataTable();
    var table25 = $('#tbPayPlanReport').DataTable();
    var table26 = $('#tbDockNoticeReport').DataTable();
    var table27 = $('#tbDoaReport').DataTable();
    var table28 = $('#tbhourlyINTReport').DataTable();
    var table29 = $('#tbsplconreport').DataTable();
    var table30 = $('#tbSTReport').DataTable();
	var table31 = $('#tbOtsdReport').DataTable();
    var table32 = $('#tbConfTicketReport').DataTable();
    var table33 = $('#workflow-administration-dataTable').DataTable();
    var table34 = $('#tbAppealsReport').DataTable();
    var table35 = $('#tbLOAReport').DataTable();
    var table36 = $('#tbCatalogYearReport').DataTable();
    var table37 = $('#tbLateAddsReport').DataTable();
	var table38 = $('#tbFAERReport').DataTable();
	var table39 = $('#tbPetitionReport').DataTable();
    var table40 = $('#tbMPPJustificationReport').DataTable();
    var table41 = $('#tbTelecommuteReport').DataTable();
    var table42 = $('#tbFARReport').DataTable();
    var table43 = $('#tbFARFReport').DataTable();
    var table44 = $('#tbDOAARFReport').DataTable();
	var table45 = $('#tbCSARFReport').DataTable();
    var table46 = $('#tbHRARFReport').DataTable();
    var table47 = $('#tbRequestForExcessUnitsReport').DataTable();
    var table48 = $('#tbSFTSReport').DataTable();
    var table49 = $('#tbTASubAFReport').DataTable();
    var table50 = $('#tbChairDirectorAFReport').DataTable();
    var table51 = $('#tbFERPReport').DataTable();
    var table52 = $('#tbSFSDReport').DataTable();
    var table53 = $('#tbPRTBReport').DataTable();
    var table54 = $('#tbTASubTSReport').DataTable(); 
	var table55 = $('#tbCbeDeclarationReport').DataTable();
    //var table56 = $('#tbParentTaxF0CTXPReport').DataTable(); 
    var table57 = $('#taxFilingStatementReport').DataTable();
	var table58 = $('#workflow-delegation-dataTable').DataTable();
    var table59 = $('#familySizeCertificateReport').DataTable();
    var table60 = $('#citizenshipVerificationReport').DataTable();
    var table61 = $('#tbFacultySpecialConsultantStipendReport').DataTable();
    var table62 = $('#tbRequestForTimeConflictReport').DataTable();
    var table63 = $('#tbSectionChangeReport').DataTable();
    var table64 = $('#tbIdVerificationStatementReport').DataTable();
    var table65 = $('#tbImmigrationCitizenshipReport').DataTable();
    var table66 = $('#tbCalGrantTransferReport').DataTable();
    var table67 = $('#tbSAPAppealReport').DataTable();
    var table68 = $('#tbUnitCapAppealReport').DataTable();
    var table69 = $('#tbLoanStatusVerificationReport').DataTable();
    var table70 = $('#tbStudentNonFiler').DataTable();
    var table71 = $('#tbFacultyAssignedTimeAgreementReport').DataTable();
    var table72 = $('#tbFederalAidRefundVerificationReport').DataTable();
    var table73 = $('#tbStudentDependentsVerificationReport').DataTable();
    var table74 = $('#tbStudentW2StatementReport').DataTable();
    var table75 = $('#tbVerificationOfNonFilingReport').DataTable();
    var table76 = $('#tbNonFilerReport').DataTable();
    var table77 = $('#tbFederalDirectLoanRequestReport').DataTable();
    var table78 = $('#tbParentStatementOfNonSupportReportModel').DataTable();
    var table79 = $('#tbFederalDirectGradPlusLoanReport').DataTable();
    var table80 = $('#tbParentAmendedTaxReturnReport').DataTable(); 
    var table81 = $('#tbDroneFlightRequestReport').DataTable();
    var table82 = $('#tbTDAExceptionUGReport').DataTable();
    var table83 = $('#tbFederalDirectPlusApplicationReport').DataTable();
    var table84 = $('#tbTDAExceptionGradReport').DataTable();
    var table85 = $('#tbAwardAdjustmentAppealInboxReport').DataTable();
    var table86 = $('#tbDependencyOverrideRenewalReport').DataTable();
    var table87 = $('#tbDependencyOverrideAppealReport').DataTable();
    var table88 = $('#tbStudentBudgetAdjustmentAppealReport').DataTable();
    var table89 = $('#tbTEACHGrantRequirementCertInboxReport').DataTable();
    var table90 = $('#tbSummerLoanRequestReport').DataTable();
    var table91 = $('#tbStudentProjectedYearIncomeAppealReport').DataTable();
    var table92 = $('#tbUnaccompaniedhomlessyouthverificationReport').DataTable();
    var table93 = $('#tbTitanCardReport').DataTable();
    var table94 = $('#tbStateUniversityGrantAppealReport').DataTable();
    var table95 = $('#tbReqToCancelFinancialAidProcessingReport').DataTable();
    var table96 = $('#tbChafeeStudentSuccessPlanReport').DataTable();
    var table97 = $('#tbGoldenStateTeacherGrantReport').DataTable();
    var table98 = $('#tbVeteranStatusVerificationReport').DataTable();
    var table99 = $('#tbSsnVerificationReport').DataTable();
    var table100 = $('#tbPetitionPGCreditReport').DataTable();
    var table101 = $('#tbPetitionGEVariationReport').DataTable();
    var table102 = $('#tbStudyAbroadAcademicTranscriptSubmissionReport').DataTable();
    var table103 = $('#tbAssetInformationReport').DataTable();
    var table104 = $('#tbInvestmentRealEstateVerificationReport').DataTable();
    var table105 = $('#tbPensionRollOverReport').DataTable();
    var table106 = $('#tbFederalTaxReturnReport').DataTable();
    var table107 = $('#tbFederalTaxReturnScheduleEReport').DataTable();
    var table108 = $('#tbConcurrentEnrollmentAgreementFallReport').DataTable();
    var table109 = $('#tbConcurrentEnrollmentAgreementSpringReport').DataTable();
    var table110 = $('#tbHousingUpdateFormReport').DataTable();
    var table111 = $('#tbBusinessSupplementReport').DataTable();
    var table112 = $('#tbPetitionforRetroactiveWithdrawalReport').DataTable();
    var table113 = $('#tbPosthumousDegreeApprovalReport').DataTable();
    var table114 = $('#tbTeachGrantSupplementReport').DataTable();
    var table115 = $('#tbFamilyCollegeEnrollmentVerificationReport').DataTable();
    var table116 = $('#tbProjectedYearIncomeAppealInboxReport').DataTable();
    var table117 = $('#tbDqAppealReport').DataTable();
    var table118 = $('#tbNachaFormReport').DataTable();
    var table119 = $('#tbnewAssetAcquisitionFormReport').DataTable();
    var table120 = $('#tbLostStolenPropertyreport').DataTable();
    var table121 = $('#tbVehicleReleaseFormReport').DataTable();
    var table122 = $('#tbOffCampusAgreementUsereport').DataTable();
    var table123 = $('#tbAppealofaDeclinedFeeWaiverReport').DataTable();
    var table124 = $('#tbPETReport').DataTable();
    var table125 = $('#tbpropertySurveyReport').DataTable();
    var table126 = $('#tbpropertyTransferReport').DataTable();
    var table127 = $('#tbdvRetroactiveLOAReport').DataTable();
    var table128 = $('#tbVerficationRequestFeeFormReport').DataTable();
    var table129 = $('#tbVolunteerFormReport').DataTable();
    var table130 = $('#tbuniversityWithdrawalReport').DataTable();
    var table131 = $('#tbdesignationCashReport').DataTable();
    var table132 = $('#tbauthorizationDriverRecordInfoReport').DataTable();
    var table133 = $('#tbauthorizationPrivateOwnedVehiclesReport').DataTable();
    var table134 = $('#tbauthorizationVehicleUniversityBusinessReport').DataTable();
    var table135 = $('#tbvendorFeeWaiverReductionReport').DataTable();


    $('.dataTables_filter input').unbind().keyup(function (e) {
        var value = $(this).val();
        if (value.length > 0) {
            table.search(value).draw();
            table1.search(value).draw();
            table2.search(value).draw();
            table3.search(value).draw();
            table4.search(value).draw();
            table5.search(value).draw();
            table6.search(value).draw();
            table7.search(value).draw();
            table8.search(value).draw();
            table9.search(value).draw();
            table10.search(value).draw();
            table11.search(value).draw();
            table12.search(value).draw();
            table13.search(value).draw();
            table14.search(value).draw();
            table15.search(value).draw();
            table16.search(value).draw();
            table17.search(value).draw();
            table18.search(value).draw();
            //table19.search(value).draw();
            table20.search(value).draw();
            table21.search(value).draw();
            table22.search(value).draw();
            table23.search(value).draw();
            table24.search(value).draw();
            table25.search(value).draw();
            table26.search(value).draw();
            table27.search(value).draw();
            table28.search(value).draw();
            table29.search(value).draw();
            table30.search(value).draw();
			table31.search(value).draw();
            table32.search(value).draw();
            table33.search(value).draw();
            table34.search(value).draw();
            table35.search(value).draw();
            table36.search(value).draw();
            table37.search(value).draw();
            table38.search(value).draw();
            table39.search(value).draw();
            table40.search(value).draw();
            table41.search(value).draw();
            table42.search(value).draw();
            table43.search(value).draw();
            table44.search(value).draw();
            table45.search(value).draw();
            table46.search(value).draw();
            table47.search(value).draw();
            table48.search(value).draw();
            table49.search(value).draw();
            table50.search(value).draw();
            table51.search(value).draw();
            table52.search(value).draw();
            table53.search(value).draw();
            table54.search(value).draw();
            table55.search(value).draw();
            table56.search(value).draw();
            table57.search(value).draw();
            table58.search(value).draw();
            table59.search(value).draw();
			table60.search(value).draw();
            table61.search(value).draw();
            table62.search(value).draw();
            table63.search(value).draw();
            table64.search(value).draw();
			table65.search(value).draw();
            table66.search(value).draw();
            table67.search(value).draw();
            table68.search(value).draw();
            table69.search(value).draw();
            table70.search(value).draw();
            table71.search(value).draw();
            table72.search(value).draw();
            table73.search(value).draw();
            table74.search(value).draw();
            table75.search(value).draw();
            table76.search(value).draw();
            table77.search(value).draw();
            table78.search(value).draw();
            table79.search(value).draw();
            table80.search(value).draw();
            table81.search(value).draw();
            table82.search(value).draw();
            table83.search(value).draw();
            table84.search(value).draw();
            table85.search(value).draw();
            table86.search(value).draw();
            table87.search(value).draw();
            table88.search(value).draw();
            table89.search(value).draw();
            table90.search(value).draw();
            table91.search(value).draw();
            table92.search(value).draw();
            table93.search(value).draw();
            table94.search(value).draw();
            table95.search(value).draw();
            table96.search(value).draw();
            table97.search(value).draw();
            table98.search(value).draw();
            table99.search(value).draw();
            table100.search(value).draw();
            table101.search(value).draw();
            table102.search(value).draw();
            table103.search(value).draw();
            table104.search(value).draw();
            table105.search(value).draw();
            table106.search(value).draw();
            table107.search(value).draw();
            table108.search(value).draw();
            table109.search(value).draw();
            table110.search(value).draw();
            table111.search(value).draw();
            table112.search(value).draw();
            table113.search(value).draw();
            table114.search(value).draw();
            table115.search(value).draw();
            table116.search(value).draw();
            table117.search(value).draw();
            table118.search(value).draw();
            table119.search(value).draw();
            table120.search(value).draw();
            table121.search(value).draw();
            table122.search(value).draw();
            table123.search(value).draw();
            table124.search(value).draw();
            table125.search(value).draw();
            table126.search(value).draw();
            table127.search(value).draw();
            table128.search(value).draw();  
            table129.search(value).draw();
            table130.search(value).draw();
            table131.search(value).draw();
            table132.search(value).draw();
            table133.search(value).draw();
            table134.search(value).draw();
            table135.search(value).draw();

        } else {
            //optional, reset the search if the phrase 
            //is less then 3 characters long
            table.search('').draw();
            table1.search('').draw();
            table2.search('').draw();
            table3.search('').draw();
            table4.search('').draw();
            table5.search('').draw();
            table6.search('').draw();
            table7.search('').draw();
            table8.search('').draw();
            table9.search('').draw();
            table10.search('').draw();
            table11.search('').draw();
            table12.search('').draw();
            table13.search('').draw();
            table14.search('').draw();
            table15.search('').draw();
            table16.search('').draw();
            table17.search('').draw();
            table18.search('').draw();
            //table19.search('').draw();
            table20.search('').draw();
            table21.search('').draw();
            table22.search('').draw();
            table23.search('').draw();
            table24.search('').draw();
            table25.search('').draw();
            table26.search('').draw();
            table27.search('').draw();
            table28.search('').draw();
            table29.search('').draw();
            table30.search('').draw();
			table31.search('').draw();
            table32.search('').draw();
            table33.search('').draw();
            table34.search('').draw();
            table35.search('').draw();
            table36.search('').draw();
            table37.search('').draw();
            table38.search('').draw();
            table39.search('').draw();
            table40.search('').draw();
            table41.search('').draw();
            table42.search('').draw();
            table43.search('').draw();
            table44.search('').draw();
            table45.search('').draw();
            table46.search('').draw();
            table47.search('').draw();
            table48.search('').draw();
            table49.search('').draw();
            table50.search('').draw();
            table51.search('').draw();
            table52.search('').draw();
            table53.search('').draw();
            table54.search('').draw();
            table55.search('').draw();
            table56.search('').draw();
            table57.search('').draw();
            table58.search('').draw();
            table59.search('').draw();
            table60.search('').draw();
            table61.search('').draw();
            table62.search('').draw();
            table63.search('').draw();
            table64.search('').draw();
            table65.search('').draw();
            table66.search('').draw();
            table67.search('').draw();
            table68.search('').draw();
            table69.search('').draw();
            table70.search('').draw();
            table71.search('').draw();
            table72.search('').draw();
            table73.search('').draw();
            table74.search('').draw();
            table75.search('').draw();
            table76.search('').draw();
            table77.search('').draw();
            table78.search('').draw();
            table79.search('').draw();
            table80.search('').draw();
            table81.search('').draw();
            table82.search('').draw();
            table83.search('').draw();
            table84.search('').draw();
            table85.search('').draw();
            table86.search('').draw();
            table87.search('').draw();
            table88.search('').draw();
            table89.search('').draw();
            table90.search('').draw();
            table91.search('').draw();
            table92.search('').draw();
            table93.search('').draw();
            table94.search('').draw();
            table95.search('').draw();
            table96.search('').draw();
            table97.search('').draw();
            table98.search('').draw();
            table99.search('').draw();
            table100.search('').draw();
            table101.search('').draw();
            table102.search('').draw();
            table103.search('').draw();
            table104.search('').draw();
            table105.search('').draw();
            table106.search('').draw();
            table107.search('').draw();
            table108.search('').draw();
            table109.search('').draw();
            table110.search('').draw();
            table111.search('').draw();
            table112.search('').draw();
            table113.search('').draw();
            table114.search('').draw();
            table115.search('').draw();
            table116.search('').draw();
            table117.search('').draw();
            table118.search('').draw();
            table119.search('').draw();
            table120.search('').draw();
            table121.search('').draw();
            table122.search('').draw();
            table123.search('').draw();
            table124.search('').draw();
            table125.search('').draw();
            table126.search('').draw();
            table127.search('').draw();
            table128.search('').draw();
            table129.search('').draw();
            table130.search('').draw();
            table131.search('').draw();
            table132.search('').draw();
            table133.search('').draw();
            table134.search('').draw();
            table135.search('').draw();

        }
    });

    $('.sidenav-toggle').on('click', function () {
        var $sidenav, $this;
        $this = $(this);
        $sidenav = $('.ct-sidenav');
        if ($this.hasClass('active')) {
            $this.removeClass('active');
            return $sidenav.removeClass('active');
        } else {
            $this.addClass('active');
            return $sidenav.addClass('active');
        }
    });
    $('#sidenav-toggle').on('click', function () {
        var $sidenav, $this;
        $this = $(this);
        $sidenav = $('.ct-sidenav');
        if ($this.hasClass('open')) {
            $this.removeClass('open');
            return $sidenav.removeClass('open');
        } else {
            $this.addClass('open');
            return $sidenav.addClass('open');
        }
    });
    $('.ct-sidenav').find('button.close').on('click', function () {
        $(this).parent().removeClass('open');
        return $('#sidenav-toggle').removeClass('open');
    });
});
