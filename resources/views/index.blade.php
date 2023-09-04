<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <table>
        <thead>
            <th>Titulo</th>
            <th>Descricao</th>
            <th>Data</th>
            <th>Actions</th>
        </thead>
        <tbody>

            @foreach ($datas as $data)
                <tr>
                    <td>{{$data['title']}}</td>
                    <td>{{$data['description']}}</td>
                    <td>{{$data['due_date']}}</td>
                    <td>
                        <a href="{{route('tasks.edit', $data['id'])}}">Editar</a>
                        <a href="">Excluir</a>
                    </td>
                </tr>

            @endforeach

        </tbody>
    </table>
</body>
</html>
