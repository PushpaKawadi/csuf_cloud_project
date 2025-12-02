$(document).ready(function() {
        $('#tbStaffReport').DataTable({
        "order": [[ 1, "asce" ]],
        "searching": true,
        "lengthMenu": [[5, 10, 20, -1], [5, 10, 20, "All"]],
        });
    });