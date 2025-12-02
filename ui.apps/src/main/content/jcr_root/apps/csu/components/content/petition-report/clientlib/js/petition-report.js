$(document).ready(function() {
        $('#tbLeaveOfAbsenceReport').DataTable({
        "order": [[ 3, "desc" ]],
        "searching": true,
        "lengthMenu": [[5, 10, 20, -1], [5, 10, 20, "All"]],
        });
    });