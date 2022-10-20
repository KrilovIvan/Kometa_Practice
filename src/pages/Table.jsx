import React, { useEffect, useRef, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { ProgressBar } from '../components/ProgressBar/ProgressBar'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'

export const Table = () => {
    const gridRef = useRef()
    const time = 1000
    //массив объектов с информацией об акумуляторах
    const [rowData, setRowData] = useState([
        {
            number: 1,
            charge: 100,
            quantity: 'Да',
            lostTime: undefined,
            status: false,
            length2: 30000,
        },
        {
            number: 2,
            charge: 90,
            quantity: 'Да',
            lostTime: undefined,
            status: false,
            length1: 12000,
        },
        {
            number: 3,
            charge: 55,
            quantity: 'Да',
            lostTime: undefined,
            status: false,
            length1: 12000,
        },
        {
            number: 4,
            charge: 67,
            quantity: 'Да',
            lostTime: undefined,
            status: false,
            length1: 12000,
        },
        {
            number: 5,
            charge: 5,
            quantity: 'Да',
            lostTime: undefined,
            status: false,
            length1: 12000,
        },
        {
            number: 6,
            charge: 0,
            quantity: 'Да',
            lostTime: undefined,
            status: false,
            length1: 12000,
        },
        {
            number: 7,
            charge: 88,
            quantity: 'Да',
            lostTime: undefined,
            status: false,
            length1: 12000,
        },
        {
            number: 8,
            charge: 79,
            quantity: 'Да',
            lostTime: undefined,
            status: false,
            length1: 12000,
        },
        {
            number: 9,
            charge: 50,
            quantity: 'Да',
            lostTime: undefined,
            status: false,
            length1: 12000,
        },
        {
            number: 10,
            charge: 10,
            quantity: 'Да',
            lostTime: undefined,
            status: false,
            length1: 12000,
        },
    ])
    const pBpu = 600 //мощность БПУ
    const uNetwork = 630 // напряжение в сети
    const ro = 0.000000017 // ужельное сопротивление меди
    const areaWire = 0.000025 // площадь поперечного сечения проводника
    const pTr = 100

    //масштабирование таблицы
    const onGridReady = () => {
        gridRef.current.api.sizeColumnsToFit()
    }

    //Рассчеты
    useEffect(() => {
        const timer = setInterval(() => {
            //исключение из массива заряда
            for (let i = 0; i < rowData.length; i++) {
                let numLen = 0
                let pObh = 0
                for (let i = 0; i < rowData.length; i++) {
                    if (rowData[i].status) {
                        numLen = i + 1
                        pObh += pTr
                    }
                }
                let pPot =
                    (pBpu ** 2 *
                        ((ro *
                            (rowData[0].length2 +
                                numLen * rowData[1].length1)) /
                            areaWire)) /
                    uNetwork ** 2

                if (rowData[i].charge >= 70) {
                    rowData[i].status = false
                }
                if (rowData[i].charge <= 30) {
                    if (pBpu - pPot - pTr > pObh) rowData[i].status = true
                }
            }
            for (let i = 0; i < rowData.length; i++) {
                let chargeMax = 0
                let chargeMaxIndex
                for (let i = 0; i < rowData.length; i++) {
                    if (rowData[i].charge > chargeMax && rowData[i].status) {
                        chargeMax = rowData[i].charge
                        chargeMaxIndex = i
                    }
                }
                if (rowData[i].charge <= 10 && !rowData[i].status) {
                    rowData[chargeMaxIndex].status = false
                    rowData[i].status = true
                }
            }
            //Определение статуса батареи

            //Определение времени заряда батареи
            for (let i = 0; i < rowData.length; i++) {
                if (rowData[i].status === 'Зарядка') {
                    rowData[i].lostTime =
                        (99 - rowData[i].charge) * (time / 1000)
                }
                if (rowData[i].status === 'Активен') {
                    rowData[i].lostTime = undefined
                }
            }
            setRowData(
                rowData.map((e) => {
                    return e.status
                        ? { ...e, charge: e.charge + 1 }
                        : { ...e, charge: e.charge - 1 }
                })
            )
        }, time)
        return () => clearInterval(timer)
    })

    //Вывод информации на экран в виде столбцов
    const [columnDefs] = useState([
        { field: 'number', headerName: 'Номер ГАС', resizable: true },
        {
            field: 'charge',
            headerName: 'Заряд АКБ',
            resizable: true,
            cellRenderer: ProgressBar,
        },
        { field: 'quantity', headerName: 'Исправность АКБ', resizable: true },
        {
            field: 'lostTime',
            headerName: 'Время зарядки',
            resizable: true,
            valueFormatter: (params) => {
                return params.data.status
                    ? `${100 - params.data.charge} сек`
                    : ''
            },
        },
        {
            field: 'status',
            headerName: 'Статус',
            resizable: true,
            valueFormatter: (params) => (params.value ? 'Зарядка' : 'Активно'),
        },
    ])

    //Возвращает таблицу с данными
    return (
        <div
            className="ag-theme-alpine-dark"
            style={{
                height: '96vh',
            }}
        >
            <AgGridReact
                ref={gridRef}
                onGridReady={onGridReady}
                rowData={rowData}
                columnDefs={columnDefs}
            ></AgGridReact>
        </div>
    )
}
